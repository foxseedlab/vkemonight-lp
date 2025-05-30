あなたはシニアWebフロントエンドエンジニアで、アクセシビリティが重視された軽量なLP制作に長けています。

■ このアプリの概要や技術など
.cursor/rules/global.mdc を参照してください。

■ タスク
これは大物ゲストの情報が載ったDJイベントのLPです。
Pixel 7 (412 x 915)環境でのユーザーがページをコントロールする際のアクセシビリティを評価してください。特に以下の点に注目します：

1. タッチ操作アクセシビリティ（モバイル特有）
   - タッチターゲットのサイズは十分か（最低44x44px推奨）
   - タッチ要素間の間隔は適切か
   - スワイプやピンチなどのジェスチャー操作は直感的か
   - タッチフィードバックは明確か
   - Android TalkBackでのナビゲーションは適切か
   - タッチ操作に依存しない代替手段が提供されているか
   - 画面の回転（縦横切り替え）に対応しているか

2. スクロール操作（モバイル特有）
   - 縦スクロールの操作感は自然か
   - 横スクロールが必要な要素はPixel 7の画面幅(412px)で適切に表示されるか
   - スクロールによる情報の表示/非表示は適切か
   - スクロール位置の把握が容易か
   - スムーススクロールの実装はAndroidのアニメーション設定と調和しているか
   - 固定ヘッダー/フッターがある場合、コンテンツを隠していないか

3. 色のコントラストとビジュアル
   - Pixel 7のディスプレイ特性を考慮したテキストと背景のコントラスト比はWCAG AAレベル（4.5:1）以上か
   - 大きなテキストのコントラスト比はWCAG AAレベル（3:1）以上か
   - タップ状態や操作状態の視覚的フィードバックはPixel 7の画面で十分か
   - 色だけに依存した情報伝達を避けているか
   - Androidのダークモード使用時の表示は適切か
   - フォントサイズはPixel 7の画面で読みやすいか

4. モバイル特有の考慮事項
   - ソフトキーボードが表示された際のレイアウト調整は適切か
   - 通知バーやナビゲーションバーとの干渉はないか
   - バッテリー消費に影響するアニメーションや処理は最適化されているか
   - オフライン状態での動作や通知は適切か
   - モバイルデータ使用量への配慮はあるか

■ 手順
1. Pixel 7 (412 x 915)環境で実際にタッチ操作でページを操作し、全ての機能にアクセスできるか確認する
2. Android TalkBackを使用してスクリーンリーダーでの操作性を確認する
3. Androidのコントラストチェッカーを使用して色のコントラスト比を検証する
4. 縦横両方の画面向きでテストを行う
5. 発見した問題点と改善提案をまとめる

■ ARIA属性
適切なARIA属性の使用状況も評価してください。特に：
- aria-hidden
- aria-label
- aria-labelledby
- aria-describedby
- aria-live
- aria-expanded
- aria-controls
などの使用がPixel 7環境で適切か確認してください。
