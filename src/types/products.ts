import { Asset, Entry, EntrySkeletonType } from 'contentful';

export interface ProductFields {
  title: string;
  description: string;
  price: number;
  slug: string;
  image: Asset | null; // Asset型を使う
}

export type ProductSkeleton = EntrySkeletonType<ProductFields, 'product'>;
export type ProductEntry = Entry<ProductSkeleton>;
