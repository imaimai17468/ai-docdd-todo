# 達成率 API設計

## 概要
日・週・月ごとのTODO達成率を取得するAPIエンドポイント。

## API一覧

### 達成率取得
```
GET /api/achievements
```
#### クエリパラメータ
- `category_id`: カテゴリID（任意）
- `date`: 基準日（任意、デフォルト: 現在日時）

#### レスポンス
```typescript
{
  daily: {
    total: number;
    completed: number;
    rate: number;
  };
  weekly: {
    total: number;
    completed: number;
    rate: number;
  };
  monthly: {
    total: number;
    completed: number;
    rate: number;
  };
}
```

### 期間別達成率取得
```
GET /api/achievements/:period
```
#### パスパラメータ
- `period`: 期間（daily, weekly, monthly）

#### クエリパラメータ
- `category_id`: カテゴリID（任意）
- `date`: 基準日（任意、デフォルト: 現在日時）

#### レスポンス
```typescript
{
  total: number;
  completed: number;
  rate: number;
  todos: {
    id: string;
    title: string;
    deadline: string | null;
    is_completed: boolean;
  }[];
}
```

### 達成率履歴取得
```
GET /api/achievements/history
```
#### クエリパラメータ
- `period`: 期間（daily, weekly, monthly）
- `category_id`: カテゴリID（任意）
- `start_date`: 開始日
- `end_date`: 終了日

#### レスポンス
```typescript
{
  history: {
    date: string;
    total: number;
    completed: number;
    rate: number;
  }[];
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
- `INVALID_PERIOD`: 無効な期間が指定されました
- `INVALID_DATE`: 無効な日付が指定されました
- `INVALID_DATE_RANGE`: 無効な日付範囲が指定されました
- `CATEGORY_NOT_FOUND`: 指定されたカテゴリが見つかりません
- `INTERNAL_ERROR`: 内部エラーが発生しました

## 計算ルール
### 期間の定義
- daily: 指定日の0:00から23:59:59まで
- weekly: 指定日を含む週の月曜日0:00から日曜日23:59:59まで
- monthly: 指定日を含む月の1日0:00から末日23:59:59まで

### 達成率の計算
- rate = (completed / total) * 100
- 小数点以下2桁まで計算（四捨五入）
- total が 0 の場合は rate も 0
