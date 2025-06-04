# 010_other.md

## 非機能要件

1. **パフォーマンス**

   - Lighthouse スコア 90 以上
   - SSR/ISR を活用したページ速度最適化

2. **セキュリティ**

   - CSRF 対策（SameSite Cookie, CSRF トークン）
   - XSS 対策（Content Security Policy）
   - SQL インジェクション対策（ORM 利用、パラメータバインド）

3. **可観測性**

   - Sentry でエラーログを監視
   - Google Analytics（GA4）でアクセス解析

4. **運用・監視**

   - Datadog / Logflare でログ収集
   - Cloudflare で WAF 有効化

5. **スケーラビリティ**
   - Vercel Serverless 関数のコールドスタートを考慮
   - RDS リードレプリカ構成を検討
