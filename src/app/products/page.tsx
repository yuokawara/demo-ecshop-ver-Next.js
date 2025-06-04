// src/app/products/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { fetchAllProducts, Product } from '@/utils/microcms';

export const revalidate = 60; // ISR: 60秒ごとに再検証

export default async function ProductsPage() {
  const products: Product[] = await fetchAllProducts();

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">商品一覧</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const imageUrl = product.image?.url;
          return (
            <li key={product.id} className="border p-4">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={product.title}
                  width={product.image.width}
                  height={product.image.height}
                />
              )}
              <h3 className="font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600">¥{product.price.toLocaleString()}</p>
              <Link
                href={`/products/${product.slug}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                詳細を見る
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// import Link from 'next/link';
// import { fetchAllProducts } from '@/utils/contentful';
// import { ProductImage } from '@/components/Image';
// import { Asset } from 'contentful';

// export const revalidate = 60; // ISR: 60秒ごとに再検証

// export default async function ProductsPage() {
//   const products = await fetchAllProducts();
//   console.log('Products fetched:', products);

//   return (
//     <div className="container mx-auto py-12">
//       <h2 className="text-2xl font-bold mb-6">商品一覧</h2>
//       <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <li key={product.sys.id} className="border p-4">
//             <ProductImage
//               image={product.fields.image as unknown as Asset | null}
//               title={product.fields.title as unknown as string}
//             />
//             <h3 className="font-semibold mt-2">
//               {product.fields.title as unknown as string}
//             </h3>
//             <p className="text-gray-600">
//               {product.fields.price !== null
//                 ? `¥${product.fields.price.toLocaleString()}`
//                 : ''}
//             </p>
//             <Link
//               href={`/products/${product.fields.slug}`}
//               className="text-blue-500 hover:underline mt-2 inline-block"
//             >
//               詳細を見る
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
