import {
  createClient,
  // MicroCMSContentId,
  // MicroCMSQueries,
} from 'microcms-js-sdk';

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

// 環境変数を参照
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

// モジュール読み込み時点では throw しない
let microcmsClient: ReturnType<typeof createClient> | null = null;

// 関数内で初めて環境変数をチェックし、必要なら throw
function getClient() {
  if (!serviceDomain || !apiKey) {
    throw new Error('microCMSの環境変数が読み込まれていません');
  }
  // いちどだけ生成してキャッシュ
  if (!microcmsClient) {
    microcmsClient = createClient({ serviceDomain, apiKey });
  }
  return microcmsClient;
}

// ページネーションやフィルターを使う場合の引数型
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const client = getClient(); // ここで初めて throw の可能性がある
    const data = await client.get({
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
    const client = getClient();
    const data = await client.get({
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
