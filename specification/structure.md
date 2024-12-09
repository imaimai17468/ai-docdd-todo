# 設計ドキュメント構成

## ディレクトリ構造
```
specification/
├── main.md           # プロジェクトの概要と要件
├── checklist.md      # 開発チェックリスト
├── structure.md      # 本ファイル：ドキュメント構成の説明
├── domain/          # 画面設計
│   ├── sidebar.md    # サイドバー画面
│   ├── main.md       # メイン画面
│   ├── achievement.md # 達成率画面
│   └── menu.md       # メニュー画面
├── api/             # API設計
│   ├── todo.md       # TODO関連API
│   ├── category.md   # カテゴリ関連API
│   └── achievement.md # 達成率関連APIs
└── component/       # コンポーネント設計
    ├── sidebar.md    # サイドバーコンポーネント
    ├── todo-list.md  # TODOリストコンポーネント
    ├── todo-item.md  # TODOアイテムコンポーネント
    └── achievement-graph.md # 達成率グラフコンポーネント
```

## 各ファイルの説明

### メインドキュメント
- `main.md`: プロジェクトの概要、機能要件、画面構成などの基本情報を記載
- `checklist.md`: 開発タスクの進捗管理用チェックリスト
- `structure.md`: 設計ドキュメントの構成と各ファイルの説明

### 画面設計 (/domain)
- `sidebar.md`: サイドバー画面のレイアウト、機能要件、UI/UX要件を定義
- `main.md`: メイン画面のTODO一覧表示、操作機能の要件を定義
- `achievement.md`: 達成率表示画面の要件とグラフ表示仕様を定義
- `menu.md`: 右側から表示されるメニュー画面の要件を定義

### API設計 (/api)
- `todo.md`: TODOのCRUD操作に関するAPIエンドポイントの定義
- `category.md`: カテゴリのCRUD操作に関するAPIエンドポイントの定義
- `achievement.md`: 達成率データ取得に関するAPIエンドポイントの定義

### コンポーネント設計 (/component)
- `sidebar.md`: サイドバーの構成コンポーネントとその責務を定義
- `todo-list.md`: TODOリスト表示・操作に関するコンポーネント構成を定義
- `todo-item.md`: 個別のTODOアイテムの表示・操作コンポーネントを定義
- `achievement-graph.md`: 達成率グラフの表示コンポーネントを定義

## 設計方針
1. 画面設計（domain）では、ユーザー視点での機能要件とUI/UXを定義
2. API設計（api）では、フロントエンドとバックエンドの通信インターフェースを定義
3. コンポーネント設計（component）では、実装レベルでのコンポーネント構成と責務を定義

## 更新ルール
1. 各ファイルの変更は必ずチェックリストに反映する
2. 設計変更時は関連するファイルすべてを更新する
3. 変更履歴は各ファイルの末尾に記録する
