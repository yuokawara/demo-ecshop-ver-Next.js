import Image from 'next/image';
import { Asset } from 'contentful';

// ProductImageコンポーネントのProps型定義
interface ProductImageProps {
  image: Asset | null;
  title: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ image, title }) => {
  // Contentful Asset型の標準構造に合わせてアクセス
  const imageUrl = image?.fields?.file?.url;
  if (!imageUrl) return null;

  return (
    <Image
      src={`https:${imageUrl}`}
      alt={title}
      width={300}
      height={200}
      className="w-full object-cover"
    />
  );
};
