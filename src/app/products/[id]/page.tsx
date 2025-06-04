// src/app/products/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  fetchAllProducts,
  fetchProductBySlug,
  Product,
} from '@/utils/microcms';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  // 事前に全商品の slug を取得し、静的パスを生成
  const products: Product[] = await fetchAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export const revalidate = 60; // ISR

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const imageUrl = product.image?.url;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={product.title}
          width={product.image.width}
          height={product.image.height}
        />
      )}
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="mt-2 text-xl">¥{product.price.toLocaleString()}</p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        カートに追加
      </button>
    </div>
  );
}
