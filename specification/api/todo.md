# TODO API設計

## 概要
TODOの作成・取得・更新・削除を行うAPIエンドポイント群。

## API一覧

### TODOリスト取得
```
GET /api/todos
```
#### クエリパラメータ
- `category_id`: カテゴリID（任意）
- `is_favorite`: お気に入りフラグ（任意）
- `is_archived`: アーカイブフラグ（任意）
- `sort`: ソート順（任意、デフォルト: deadline_asc）
  - `deadline_asc`: 期限昇順
  - `deadline_desc`: 期限降順

#### レスポンス
```typescript
{
  todos: {
    id: string;
    title: string;
    deadline: string | null;
    category_id: string;
    is_completed: boolean;
    is_favorite: boolean;
    created_at: string;
    updated_at: string;
  }[];
}
```

### TODO詳細取得
```
GET /api/todos/:id
```
#### パスパラメータ
- `id`: TODO ID

#### レスポンス
```typescript
{
  id: string;
  title: string;
  deadline: string | null;
  category_id: string;
  is_completed: boolean;
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
}
```

### TODO作成
```
POST /api/todos
```
#### リクエストボディ
```typescript
{
  title: string;
  deadline?: string;
  category_id: string;
  is_favorite?: boolean;
}
```

#### レスポンス
```typescript
{
  id: string;
  title: string;
  deadline: string | null;
  category_id: string;
  is_completed: boolean;
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
}
```

### TODO更新
```
PATCH /api/todos/:id
```
#### パスパラメータ
- `id`: TODO ID

#### リクエストボディ
```typescript
{
  title?: string;
  deadline?: string | null;
  category_id?: string;
  is_completed?: boolean;
  is_favorite?: boolean;
}
```

#### レスポンス
```typescript
{
  id: string;
  title: string;
  deadline: string | null;
  category_id: string;
  is_completed: boolean;
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
}
```

### TODO削除
```
DELETE /api/todos/:id
```
#### パスパラメータ
- `id`: TODO ID

#### レスポンス
```typescript
{
  success: boolean;
}
```

## エラーレスポンス
```typescript
{
  error: {
    code: string;
    message: string;
  };
}
```

### エラーコード一覧
- `TODO_NOT_FOUND`: 指定されたTODOが見つかりません
- `INVALID_CATEGORY`: 無効なカテゴリIDが指定されました
- `INVALID_DEADLINE`: 無効な期限が指定されました
- `INVALID_TITLE`: タイトルが空または長すぎます
- `INTERNAL_ERROR`: 内部エラーが発生しました

## バリデーションルール
- タイトル: 1-100文字
- 期限: ISO 8601形式の日時文字列
- カテゴリID: 有効なUUID
- お気に入り: boolean
- 完了状態: boolean
