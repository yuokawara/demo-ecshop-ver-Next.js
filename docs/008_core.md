## 商品一覧取得フロー

1. ユーザーが `/products` 画面をリクエスト
2. Next.js の `getStaticProps` (App Router では `fetchAllProducts` を呼出) で MicroCMS から全件取得
3. 取得した商品データをプレレンダリングして静的 HTML を生成
4. ブラウザに返却し、ユーザーに表示

## 商品詳細閲覧フロー

1. ユーザーが `/products/[id]` でリクエスト
2. `generateStaticParams` で事前にスラッグ一覧を生成し、静的パスを作成
3. `getStaticProps` (または `fetchProductBySlug`) で該当 ID を Micro CMS からフェッチ
4. 静的ページを生成（ISR 設定がある場合は再検証あり）
5. ユーザーに返却・表示

## カート追加フロー

1. ユーザーが「カートに追加」ボタンを押す
2. クライアント側で Zustand / Recoil / React Context などに状態を保存
3. `/cart` 画面でカート内商品一覧を取得し表示
4. 次へ進むと Checkout フローへ遷移

## Checkout → 注文完了フロー

1. `/checkout` 画面で配送先・支払い方法フォームを入力
2. フロントエンドで Stripe などの SDK を呼び出して決済トークンを発行
3. バックエンド（Serverless API）に注文情報＋トークンを POST
4. バックエンドが DB 保存、外部決済 API 呼び出し（Stripe）、支払い完了後トランザクション確定
5. フロントエンドに「注文完了」レスポンスを返し、サンクスページ表示
