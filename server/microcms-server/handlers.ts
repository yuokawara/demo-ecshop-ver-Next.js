import { JSONRPCServer } from 'json-rpc-2.0';
import { createClient } from 'microcms-js-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

// ProductFields は現行の Next.js で使っている型と合わせる
export type ProductFields = {
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

// Micro CMS クライアント
const microcmsClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

// JSON-RPC サーバーを作成
const server = new JSONRPCServer();

// initialize メソッド：クライアントと名刺交換
server.addMethod('initialize', () => {
  return {
    serverName: 'MicroCMSServer',
    version: '1.0.0',
    availableTools: [
      { name: 'getProducts', description: '商品一覧を取得する' },
      { name: 'getProductBySlug', description: 'slug で単一商品を取得' },
    ],
  };
});

// getProducts メソッド
server.addMethod('getProducts', async () => {
  const data = await microcmsClient.get({
    endpoint: 'products',
    queries: { limit: 100 },
  });
  return data.contents;
});

// getProductBySlug メソッド
server.addMethod('getProductBySlug', async ({ slug }: { slug: string }) => {
  const data = await microcmsClient.get({
    endpoint: 'products',
    queries: { filters: `slug[equals]${slug}` },
  });
  if (data.contents.length === 0) return null;
  return data.contents[0];
});

export default server;
