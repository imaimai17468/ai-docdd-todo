# 開発チェックリスト

## 設計ドキュメント
- [x] プロジェクト概要の作成 (main.md)
- [x] 開発チェックリストの作成 (checklist.md)
- [x] ドキュメント構成の説明作成 (structure.md)

### 画面設計
- [x] サイドバー画面設計 (specification/domain/sidebar.md)
- [x] メイン画面設計 (specification/domain/main.md)
- [x] 達成率画面設計 (specification/domain/achievement.md)
- [x] メニュー画面設計 (specification/domain/menu.md)

### API設計
- [x] TODOのCRUD API設計 (specification/api/todo.md)
- [x] カテゴリのCRUD API設計 (specification/api/category.md)
- [x] 達成率取得API設計 (specification/api/achievement.md)

### コンポーネント設計
- [x] サイドバーコンポーネント設計 (specification/component/sidebar.md)
- [x] TODOリストコンポーネント設計 (specification/component/todo-list.md)
- [x] TODOアイテムコンポーネント設計 (specification/component/todo-item.md)
- [x] 達成率グラフコンポーネント設計 (specification/component/achievement-graph.md)
- [x] shadcn/uiコンポーネント使用計画 (specification/component/shadcn-ui.md)

## 環境整備
- [x] Biomeの設定
  - [x] `.biome.json`の作成
  - [x] フォーマットルールの設定
  - [x] リントルールの設定
- [x] lefthookの設定
  - [x] `lefthook.yml`の作成
  - [x] コミット前のフォーマット・リントチェックの設定
- [x] shadcn/uiの設定
  - [x] インストールと初期設定
  - [x] 必要なコンポーネントの追加
    - [x] サイドバー関連（Sidebar）
    - [x] レイアウト系（Sheet, Separator, Card, ScrollArea）
    - [x] フォーム系（Form, Input, Button, Checkbox, Select, Badge, Calendar, Popover）
    - [x] フィードバック系（Toast, Dialog, Progress）
    - [x] その他（DropdownMenu, Tooltip）

## DB設定
- [ ] drizzleの設定
  - [ ] スキーマ定義
  - [ ] マイグレーションファイルの作成
  - [ ] シードデータの作成
- [ ] cloudflare D1との連携
  - [ ] D1データベースの作成
  - [ ] 接続設定
  - [ ] マイグレーションの実行

## コンポーネント実装
### サイドバー
- [ ] サイドバーのベース実装
- [ ] カテゴリリストの実装
- [ ] カテゴリ操作メニューの実装
- [ ] SPレイアウト対応

### メイン画面
- [ ] TODOリストのベース実装
- [ ] TODO追加フォームの実装
- [ ] TODO編集機能の実装
- [ ] ソート機能の実装
- [ ] お気に入り機能の実装

### 達成率画面
- [ ] 達成率計算ロジックの実装
- [ ] グラフ表示の実装
- [ ] SPレイアウト対応

## テスト実装
### Unit Test
- [ ] TODOコンポーネントのテスト
- [ ] カテゴリコンポーネントのテスト
- [ ] 達成率計算ロジックのテスト

### E2Eテスト
- [ ] TODO作成・編集・削除フローのテスト
- [ ] カテゴリ作成・編集・削除フローのテスト
- [ ] お気に入り機能のテスト
- [ ] レスポンシブ対応のテスト
