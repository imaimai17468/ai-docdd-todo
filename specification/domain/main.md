# メイン画面設計

## 概要
TODOリストを表示・操作する中央のメイン画面。
タスクの一覧表示、追加、編集、削除などの主要な操作を行う。

## 画面構成
### ヘッダー部分
- 現在選択中のカテゴリ名表示
- タスク追加ボタン
- ソート機能（期限の昇順・降順）

### タスクリスト
- タスクカードの縦並び表示
- 各タスクカードの表示項目
  - チェックボックス
  - タスク名
  - 期限
  - カテゴリ
  - アクションボタン（お気に入り・編集・削除）

## 機能要件
### タスク追加
- 追加ボタンクリックで右側にSheet表示
- 入力項目
  - タスク名（必須）
  - 期限（任意）
  - カテゴリ（必須）
  - お気に入り設定（任意）

### タスク編集
- 編集ボタンクリックで右側にSheet表示
- タスク追加と同じ入力項目
- 現在の値をデフォルト表示

### タスク削除
- 削除前に確認ダイアログ表示
- 削除後は即時リスト更新

### タスク完了
- チェックボックスクリックで完了状態切り替え
- 完了したタスクはアーカイブに移動

### ソート機能
- 期限による昇順・降順ソート
- ソート状態の視覚的表示

## UI/UXの要件
### スタイリング
- タスクカードはshadcn/uiのCardコンポーネント使用
- 期限切れタスクは警告色で表示
- 完了タスクは薄暗く表示

### アニメーション
- タスク追加・削除時のスムーズな遷移
- Sheet表示時のスライドアニメーション
- ソート時のスムーズな並び替え

### レスポンシブ対応
- SPサイズでもタスクカードの視認性を確保
- タッチ操作に適したUIサイズ調整

## エラーハンドリング
- 必須項目の入力チェック
- 期限の日付形式チェック
- ネットワークエラー時のフォールバック表示
- 楽観的更新失敗時のリカバリー

## パフォーマンス要件
- タスクリストの遅延読み込み
- タスク操作の即時反映（オプティミスティックUI）
- キャッシュの活用
