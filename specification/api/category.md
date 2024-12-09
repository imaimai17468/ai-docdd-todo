# カテゴリ API設計

## 概要
カテゴリの作成・取得・更新・削除を行うAPIエンドポイント群。

## API一覧

### カテゴリリスト取得
```
GET /api/categories
```
#### レスポンス
```typescript
{
  categories: {
    id: string;
    name: string;
    icon: string;
    todo_count: number;
    created_at: string;
    updated_at: string;
  }[];
}
```

### カテゴリ詳細取得
```
GET /api/categories/:id
```
#### パスパラメータ
- `id`: カテゴリID

#### レスポンス
```typescript
{
  id: string;
  name: string;
  icon: string;
  todo_count: number;
  created_at: string;
  updated_at: string;
}
```

### カテゴリ作成
```
POST /api/categories
```
#### リクエストボディ
```typescript
{
  name: string;
  icon: string;
}
```

#### レスポンス
```typescript
{
  id: string;
  name: string;
  icon: string;
  todo_count: number;
  created_at: string;
  updated_at: string;
}
```

### カテゴリ更新
```
PATCH /api/categories/:id
```
#### パスパラメータ
- `id`: カテゴリID

#### リクエストボディ
```typescript
{
  name?: string;
  icon?: string;
}
```

#### レスポンス
```typescript
{
  id: string;
  name: string;
  icon: string;
  todo_count: number;
  created_at: string;
  updated_at: string;
}
```

### カテゴリ削除
```
DELETE /api/categories/:id
```
#### パスパラメータ
- `id`: カテゴリID

#### クエリパラメータ
- `force`: 関連するTODOも削除するフラグ（デフォルト: false）

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
- `CATEGORY_NOT_FOUND`: 指定されたカテゴリが見つかりません
- `CATEGORY_HAS_TODOS`: カテゴリに関連するTODOが存在します
- `INVALID_NAME`: カテゴリ名が空または長すぎます
- `DUPLICATE_NAME`: 同じ名前のカテゴリが既に存在します
- `INVALID_ICON`: 無効なアイコンが指定されました
- `INTERNAL_ERROR`: 内部エラーが発生しました

## バリデーションルール
- カテゴリ名: 1-50文字
- アイコン: 有効なアイコン名（Lucideアイコン名）
