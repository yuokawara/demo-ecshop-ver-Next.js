# 005_research.md

## 5.1 外部 API 調査

- Micro CMS のデータ取得方法
  - SDK / REST API
  - ページネーション方法
  - GraphQL プランの有無
- 決済連携（Stripe / PayPal / 決済代行会社）
  - 日本国内向けには Stripe + Konbini 決済も検討
  - クレジットカード情報のトークン化実装フロー
- SMS 認証（Twilio / Authy / Firebase）
  - 2要素認証用の導入コスト
- プッシュ通知（Firebase Cloud Messaging / OneSignal）
  - Web Push とモバイルプッシュのコスト比較

## 5.2 技術トレンド調査

- Next.js 15 の新機能（React Server Components・Streaming）
- 新しい LLM モデル（GPT-4o / Gemini）を活用した自動コード生成フロー
- Headless CMS の比較（Micro CMS vs Contentful vs Hygraph vs Strapi 等）
- セキュリティベストプラクティスのアップデート（OWASP Top10, CSP ヘッダー等）
