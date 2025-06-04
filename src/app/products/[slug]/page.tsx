// src/app/products/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  fetchAllProducts,
  fetchProductBySlug,
  Product,
} from '@/utils/microcms';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products: Product[] = await fetchAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export const revalidate = 60;

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const resolvedParams = await params; // Await the params
  const slug: string = resolvedParams.slug;

  const product = await fetchProductBySlug(slug);
  if (!product) notFound();

  const imageUrl = product.image.url;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <Image
        src={imageUrl}
        alt={product.title}
        width={product.image.width}
        height={product.image.height}
      />
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="mt-2 text-xl">¥{product.price.toLocaleString()}</p>
    </div>
  );
}
