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

## Vercel へのデプロイ手順

以下の手順に沿って、GitHub リポジトリを Vercel に連携し、自動デプロイを設定します。

---

### 1. Vercel アカウントの準備

1. [Vercel](https://vercel.com/) にアクセスし、「Sign Up」から GitHub アカウントでログインまたは新規登録します。
2. ログイン後、ダッシュボードに飛んだら、右上の「New Project」をクリックします。

---

### 2. GitHub リポジトリと連携

1. 「New Project」画面で「Import Git Repository」を選択し、GitHub と連携済みのアカウントを選びます。
2. リストアップされた自分のリポジトリから、今回作成した `my-frontend-app` を選択します。
3. 次のページでビルド設定を確認します。通常は以下のままで問題ありません。
   - **Framework Preset**: `Next.js` が自動で検出される
   - **Root Directory**: 空欄（または `/`）
   - **Build Command**: `npm run build` (あるいは `yarn build`)
   - **Output Directory**: 自動で `/.next` が設定される

---

### 3. 環境変数の設定（Headless CMS API 等がある場合）

1. デプロイ時に必要な環境変数を Vercel 側で設定します。
2. Vercel ダッシュボードの該当プロジェクトページで「Settings」→「Environment Variables」を開きます。
3. 例えば Headless CMS のエンドポイントや API キーが必要な場合は、以下のように追加します。
   - `NEXT_PUBLIC_API_BASE_URL` → `https://api.example.com`
   - `CMS_API_KEY` → `xxxxxxxxxxxxxxxxxxxx`
   - `NEXTAUTH_SECRET` → `ランダムな文字列（JWT など認証周りがある場合）`
4. `Environment` は必要に応じて「Preview（プレビュー環境）」「Production（本番環境）」を選択して登録します。

---

### 4. デプロイの実行

1. Vercel のプロジェクトページに戻り、「Deploy」ボタンをクリックすると、自動でビルド＆デプロイが始まります。
2. GitHub の `main` ブランチにプッシュするたびに Vercel がトリガーされ、自動で再ビルド＆再デプロイされます。
3. 成功すると、Vercel が払い出す検証用 URL（Preview Deployment）や、本番用の独自ドメインが発行されます。

---

### 5. ドメイン設定（カスタムドメインを使う場合）

1. Vercel ダッシュボードのプロジェクトページで「Settings」→「Domains」を選択します。
2. 「Add」欄に自分が所有するカスタムドメイン（例：`example.com` や `shop.example.com`）を入力し、「Add Domain」をクリック。
3. DNS 側で CNAME または A レコードを Vercel 指示の通りに設定します（Vercel がガイドを表示します）。
4. DNS が浸透すれば、カスタムドメインで自動的に HTTPS（Let's Encrypt）が有効化され、本番サイトへのアクセスが可能になります。

---

### 6. プレビュー URL の活用

- プルリクエストを作成すると、Vercel が自動的にそのPR用のプレビューサイトを生成してくれます。
- チームメンバーやクライアントにプレビュー URL を共有して、実際に動作を見ながらレビューができます。
- マージ後は本番 URL に反映されます。

---

### 7. トラブルシューティング

- **ビルドエラーが発生する場合**
  - `Vercel Dashboard → Deployments` で失敗した直近デプロイのログを確認し、どのコマンドでエラーになったか特定してください。
  - 環境変数不足や Node.js バージョンの不整合、ビルドスクリプトのタイポなどが原因であることが多いです。
- **404 が返ってくる場合**

  - `app/router` で作成している場合は、`next.config.js` に `trailingSlash` や `rewrites` が必要なケースがあります。
  - `next.config.js` に以下の設定を追加すると `/products` や `/products/1` などが正しく動くか確認してください。

    ```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      experimental: {
        appDir: true,
      },
      reactStrictMode: true,
      // 必要に応じて
      // trailingSlash: true,
      // async rewrites() {
      //   return [
      //     { source: '/products/:path*', destination: '/products/:path*' },
      //   ]
      // },
    };

    module.exports = nextConfig;
    ```

- **環境変数が反映されない場合**
  - Vercel の「Settings → Environment Variables」で設定した同じキー名を使っているか、正しく入力されているか、Environment が「Preview」「Production」両方に設定されているかを確認してください。

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
