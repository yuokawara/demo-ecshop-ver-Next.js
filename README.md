This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

my-frontend-app/
├── .github/
│ ├── workflows/ ← GitHub Actions の設定
│ └── ISSUE*TEMPLATE/ ← Issue テンプレート
├── public/ ← 画像やフォントなど静的ファイル
├── src/
│ ├── app/ ← App Router 用ルート
│ │ ├── api/ ← Next.js の API Routes（appDir 用）
│ │ │ └── products/ ← 例: app/api/products/route.ts など
│ │ │ └── route.ts
│ │ ├── components/ ← ページ固有の小さなコンポーネント（必要に応じて）
│ │ ├── layout.tsx ← 全ページ共通のレイアウト＆プロバイダ設定
│ │ ├── globals.css ← グローバル CSS（Tailwind の @tailwind base/etc など）
│ │ ├── page.tsx ← ルート / のページコンポーネント
│ │ ├── head.tsx ← <head> の metadata 定義や SEO 設定
│ │ ├── products/ ← /products ページ用ディレクトリ
│ │ │ ├── page.tsx ← /products のページ
│ │ │ └── [id]/ ← 動的ルート例: /products/[id]
│ │ │ └── page.tsx ← /products/[id] のページ
│ │ └── cart/ ← /cart ページ用ディレクトリ
│ │ └── page.tsx ← /cart のページ
│ ├── components/ ← 汎用コンポーネント（ボタン・入力欄など）
│ ├── layouts/ ← 必要に応じて分割したレイアウト/Partial
│ │ ├── Header.tsx ← ページ全体のヘッダー部分
│ │ └── Footer.tsx ← ページ全体のフッター部分
│ ├── styles/ ← Tailwind/Global CSS（グローバル用は app/globals.css にも配置可）
│ ├── utils/ ← ユーティリティ関数・API クライアント設定
│ ├── hooks/ ← カスタム React Hooks
│ └── types/ ← TypeScript の型定義（共通型）
├── .eslintrc.json ← ESLint 設定
├── tsconfig.json ← TypeScript 設定（src/app を含むように paths を調整）
├── tailwind.config.js ← Tailwind CSS 設定（content に src/app/\**/\_.{ts,tsx} などを追加）
├── next.config.js ← Next.js 設定（appDir を有効化済みのはず）
├── .gitignore
└── package.json

## 今後のロードマップ例（MVP→フェーズ2以降）

### フェーズ1（MVP）

- **Next.js + Headless CMS連携**
  - ログイン不要のトップページ／商品一覧／商品詳細ページを SSG or ISR で構築
- **GitHub Actions で CI を回す**
  - Lint と Build を常時チェック
- **プロジェクト管理**
  - GitHub Projects で「フェーズ1 の必須タスク」を管理
- **Tailwind CSS で最低限のデザイン実装**

---

### フェーズ2

- **会員認証・マイページ機能（SSR）**
- **カート機能 → Stripe 決済連携**
- **レスポンシブ最適化**
  - 各ブレイクポイント（スマホ／タブレット／PC）で調整
- **E2E テスト導入（Cypress など）**
  - GitHub Actions に組み込む

---

### フェーズ3

- **レコメンド機能**
  - フロントでの動的表示＋API 連携
- **PWA 機能**
  - オフラインキャッシュなど
- **国際化・多言語対応**
- **SEO強化**
  - meta タグ、構造化データなどの最適化
