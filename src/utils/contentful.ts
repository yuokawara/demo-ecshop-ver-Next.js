import { createClient } from 'contentful';

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!;

// ビルドログ上に値がどう出ているかをチェック
console.log('⛔ VERCEL ENV SPACE_ID:', spaceId);
console.log('⛔ VERCEL ENV ACCESS_TOKEN:', accessToken);

if (!spaceId || !accessToken) {
  throw new Error('Contentful の環境変数が読み込まれていません');
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

/** 商品一覧を取って、自前の ProductEntry[] にマッピングする */
export async function fetchAllProducts() {
  const raw = await client.getEntries({
    content_type: 'product',
    include: 2, // // リンク解決の深さ（Asset を直接 fields に取り込むため）
    locale: 'en-US', // ロケールを明示して取得
  });

  return raw.items.map((item) => {
    return {
      sys: item.sys,
      metadata: item.metadata,
      fields: {
        title: item.fields.title,
        description: item.fields.description,
        price: item.fields.price,
        slug: item.fields.slug,
        image: item.fields.image,
      },
    };
  });
}

/** スラッグから単一の商品を取って、自前の ProductEntry にマッピング */
export async function fetchProductBySlug(slug: string) {
  const query = {
    content_type: 'product',
    'fields.slug': slug,
    limit: 1,
    include: 2,
    locale: 'en-US',
  };

  const raw = await client.getEntries(query);

  if (!raw.items.length) {
    return null;
  }

  const item = raw.items[0];
  return {
    sys: item.sys, // sysオブジェクト全体を使用
    metadata: item.metadata,
    fields: {
      title: item.fields.title,
      description: item.fields.description,
      price: item.fields.price,
      slug: item.fields.slug,
      image: item.fields.image,
    },
  };
}
