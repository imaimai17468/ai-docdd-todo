# 達成率グラフコンポーネント設計

## 概要
日・週・月ごとのTODO達成率を視覚的に表示するグラフコンポーネント。
進捗状況を円グラフとパーセンテージで表示する。

## コンポーネント構成
```
AchievementGraph/
├── index.tsx
├── DailyProgress.tsx
├── WeeklyProgress.tsx
├── MonthlyProgress.tsx
└── ProgressCircle.tsx
```

## 各コンポーネントの責務

### AchievementGraph
- 全体のレイアウト管理
- データの取得と更新
- 子コンポーネントへのデータ受け渡し

#### Props
```typescript
interface AchievementGraphProps {
  categoryId?: string;
  className?: string;
}
```

### DailyProgress
- 今日の達成率表示
- データの自動更新

#### Props
```typescript
interface DailyProgressProps {
  total: number;
  completed: number;
  rate: number;
}
```

### WeeklyProgress
- 今週の達成率表示
- 週の開始日から終了日の表示

#### Props
```typescript
interface WeeklyProgressProps {
  total: number;
  completed: number;
  rate: number;
  startDate: string;
  endDate: string;
}
```

### MonthlyProgress
- 今月の達成率表示
- 月の表示

#### Props
```typescript
interface MonthlyProgressProps {
  total: number;
  completed: number;
  rate: number;
  month: string;
}
```

### ProgressCircle
- 円グラフの表示

#### Props
```typescript
interface ProgressCircleProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'success' | 'warning' | 'danger';
  showValue?: boolean;
  className?: string;
}
```

## 状態管理
### グローバル状態
- 選択中のカテゴリID
- 達成率データ

### ローカル状態
- ローディング状態
- エラー状態
- 更新タイマー

## データ更新
### 自動更新
- 5分ごとの定期更新
- タスク完了時の即時更新
- 日付変更時の更新

### 手動更新
- プルトゥリフレッシュ
- 再取得ボタン

## スタイリング
### 使用するshadcn/uiコンポーネント
- Card
- Progress
- RadialProgress
- Separator
- Button

### カスタムスタイル
#### 達成率による色分け
- 0-30%: 赤系 (#ef4444)
- 31-70%: 黄系 (#f59e0b)
- 71-100%: 緑系 (#22c55e)

#### レイアウト
- グリッドレイアウト
- レスポンシブ対応
- 適切な間隔

## エラーハンドリング
- データ取得エラー時のフォールバック
- 再試行機能
- エラーメッセージの表示
- オフライン対応

## パフォーマンス最適化
- メモ化によるレンダリング最適化
- 更新頻度の調整
- キャッシュの活用

## レスポンシブ対応
### デスクトップ
- 3カラムレイアウト
- 大きめの円グラフ
- 詳細情報の表示

### タブレット
- 2カラムレイアウト
- 中サイズの円グラフ
- 一部情報の省略

### モバイル
- 1カラムレイアウト
- 小さめの円グラフ
- 最小限の情報表示
