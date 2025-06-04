# 004_techStack.md

## フロントエンド

- Next.js 15.x (App Router)
- TypeScript
- Tailwind CSS
- React Query / SWR (データフェッチライブラリ)
- MicroCMS (ヘッドレス CMS)
- Vercel（ホスティング／CI/CD）

## API

- Node.js + Express または Next.js API Routes
- TypeScript
- JWT 認証（Auth0 も可）
- Prisma or TypeORM（ORM）
- PostgreSQL / MySQL / SQLite

## インフラ

- Vercel (フロントエンドホスティング + Serverless Functions)
- Cloudflare CDN (静的資産キャッシュ)
- AWS RDS / DigitalOcean Managed DB (本番 DB)
- Supabase Auth（認証代替）

## その他

- GitHub Actions (ESLint / Prettier / 型チェック / ユニットテスト)
- Docker (ローカル開発環境構築)
- ESLint, Prettier, Husky (コミット前の自動整形＆リンティング)
- Sentry (例外監視)
