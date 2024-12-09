# TODOアイテムコンポーネント設計

## 概要
個別のTODOアイテムを表示するコンポーネント。
タスクの詳細表示と各種操作を提供する。

## コンポーネント構成
```
TodoItem/
├── index.tsx
├── Checkbox.tsx
├── DeadlineDisplay.tsx
├── CategoryBadge.tsx
└── ActionButtons.tsx
```

## 各コンポーネントの責務

### TodoItem
- TODOアイテム全体のレイアウト管理
- 状態管理
- イベントハンドリング

#### Props
```typescript
interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    deadline: string | null;
    categoryId: string;
    categoryName: string;
    isCompleted: boolean;
    isFavorite: boolean;
  };
  onUpdate: (data: Partial<Todo>) => void;
  onDelete: () => void;
  onEdit: () => void;
}
```

### Checkbox
- 完了状態の表示・切り替え
- アニメーション付きのチェックマーク

#### Props
```typescript
interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}
```

### DeadlineDisplay
- 期限の表示
- 期限切れ警告表示
- 相対時間表示

#### Props
```typescript
interface DeadlineDisplayProps {
  deadline: string | null;
  isCompleted: boolean;
}
```

### CategoryBadge
- カテゴリ名の表示
- カテゴリ色の表示

#### Props
```typescript
interface CategoryBadgeProps {
  categoryId: string;
  categoryName: string;
}
```

### ActionButtons
- 各種アクションボタンの表示
- ボタンの状態管理

#### Props
```typescript
interface ActionButtonsProps {
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}
```

## 状態管理
### ローカル状態
- ホバー状態
- フォーカス状態
- ボタンの表示状態
- アニメーション状態

## イベントハンドリング
### チェックボックス操作
- クリック/タップ
- キーボード操作
- 状態変更通知

### お気に入り操作
- トグル処理
- アニメーション制御

### 編集・削除操作
- 編集モード切り替え
- 削除確認

## スタイリング
### 使用するshadcn/uiコンポーネント
- Card
- Checkbox
- Button
- Badge（カテゴリ用）
- Tooltip
- Dialog（削除確認用）

### カスタムスタイル
#### 通常状態
- 背景色: white
- 境界線: 薄いグレー
- 角丸: 8px
- パディング: 16px

#### 完了状態
- タイトル: 取り消し線
- 透明度: 0.6

#### 期限切れ状態
- 期限表示: 警告色
- 背景色: 薄い警告色

#### ホバー状態
- 背景色変更
- アクションボタン表示

## アニメーション
### チェックボックス
- チェックマークのフェードイン/アウト
- 完了時の全体的な透明度変更

### お気に入りボタン
- スター（ハート）のアニメーション
- 色の変更トランジション

### アクションボタン
- ホバー時のフェードイン
- ツールチップの表示

## エラーハンドリング
- API通信エラー時のフォールバック
- アニメーション失敗時の対応
- 無効な日付形式への対応

## パフォーマンス最適化
- メモ化によるレンダリング最適化
- アニメーションの最適化
- 画像（アイコン）の最適化

## アクセシビリティ
### キーボード操作
- Tab移動
- Space/Enterでのチェックボックス操作
- ショートカットキー

### スクリーンリーダー対応
- 適切なARIAラベル
- 状態変更の通知
- アクションの説明

### その他
- 十分なコントラスト比
- フォーカス表示
- タッチターゲットサイズ
