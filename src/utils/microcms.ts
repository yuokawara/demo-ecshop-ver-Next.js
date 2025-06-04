import {
  createClient,
  // MicroCMSContentId,
  // MicroCMSQueries,
} from 'microcms-js-sdk';

// 環境変数を参照
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error('microCMSの環境変数が読み込まれていません');
}

// クライアントを生成
export const microcmsClient = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});

// 商品一覧取得用
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

// ページネーションやフィルターを使う場合の引数型
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const data = await microcmsClient.get({
      endpoint: 'products',
      queries: { limit: 100 },
    });
    return data.contents as Product[];
  } catch (err) {
    console.error('fetchAllProducts error:', (err as Error).message);
    return [];
  }
}

// slug から単一商品を取得する場合
export async function fetchProductBySlug(
  slug: string
): Promise<Product | null> {
  try {
    const data = await microcmsClient.get({
      endpoint: 'products',
      queries: { filters: `slug[equals]${slug}` },
    });
    if (!data.contents || data.contents.length === 0) return null;
    return data.contents[0] as Product;
  } catch (error) {
    console.error('fetchProductBySlug error:', error);
    return null;
  }
}
