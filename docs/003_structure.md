# 003_structure.md

## 全体フォルダ構成（Next.js + TypeScript 想定）

my-frontend-app/
├── .github/ # CI/CD（GitHub Actions）設定、ISSUE テンプレート
├── public/ # 静的ファイル
│ └── images/
├── src/
│ ├── app/ # Next.js App Router 用ディレクトリ
│ │ ├── layout.tsx # 全体レイアウト（共通ヘッダー／フッター）
│ │ ├── globals.css # グローバル CSS
│ │ ├── page.tsx # ルートページ `/`
│ │ ├── products/ # 商品関連ページ
│ │ │ ├── page.tsx # `/products`（一覧）
│ │ │ └── [slug]/ # `/products/[slug]`（詳細）
│ │ │ └── page.tsx
│ │ └── cart/ # `/cart`（カート画面）
│ │ └── page.tsx
│ ├── components/ # 再利用可能なコンポーネント（ボタン、カード等）
│ ├── hooks/ # カスタム React Hooks
│ ├── utils/ # ユーティリティ関数、API クライアント設定
│ │ └── microcms.ts # Micro CMS クライアント
│ ├── styles/ # Tailwind/Global CSS（必要に応じて分割）
│ └── types/ # TypeScript 型定義
├── .eslintrc.json # ESLint 設定
├── tsconfig.json # TypeScript 設定
├── tailwind.config.js # Tailwind CSS 設定
├── next.config.js # Next.js 設定（images.remotePatterns など）
├── .gitignore
└── package.json
