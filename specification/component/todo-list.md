# TODOリストコンポーネント設計

## 概要
TODOリストを表示・操作するメインコンポーネント。
タスクの一覧表示、ソート、追加、編集、削除などの機能を提供する。

## コンポーネント構成
```
TodoList/
├── index.tsx
├── Header.tsx
├── TodoItems.tsx
├── TodoItem.tsx
├── AddTodoButton.tsx
└── TodoForm.tsx
```

## 各コンポーネントの責務

### TodoList
- TODOリスト全体のレイアウト管理
- データの取得と状態管理
- 子コンポーネントへのデータ受け渡し

#### Props
```typescript
interface TodoListProps {
  categoryId?: string;
  className?: string;
}
```

### Header
- カテゴリ名の表示
- タスク追加ボタンの配置
- ソート機能の提供

#### Props
```typescript
interface HeaderProps {
  categoryName: string;
  sortOrder: 'deadline_asc' | 'deadline_desc';
  onSortChange: (order: 'deadline_asc' | 'deadline_desc') => void;
  onAddClick: () => void;
}
```

### TodoItems
- TODOアイテムのリスト表示
- 仮想スクロール対応
- ドラッグ&ドロップ対応（将来的な拡張）

#### Props
```typescript
interface TodoItemsProps {
  todos: Todo[];
  onTodoUpdate: (id: string, data: Partial<Todo>) => void;
  onTodoDelete: (id: string) => void;
}
```

### TodoItem
- 個別のTODOアイテムの表示
- チェックボックス
- 期限表示
- アクションボタン

#### Props
```typescript
interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    deadline: string | null;
    categoryId: string;
    isCompleted: boolean;
    isFavorite: boolean;
  };
  onUpdate: (data: Partial<Todo>) => void;
  onDelete: () => void;
  onEdit: () => void;
}
```

### AddTodoButton
- タスク追加ボタン
- フォーム表示の制御

#### Props
```typescript
interface AddTodoButtonProps {
  onClick: () => void;
}
```

### TodoForm
- タスク追加・編集フォーム
- バリデーション
- 送信処理

#### Props
```typescript
interface TodoFormProps {
  todo?: Todo;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TodoFormData) => void;
}
```

## 状態管理
### グローバル状態
- TODOリストデータ
- 選択中のカテゴリ情報
- ソート順

### ローカル状態
- フォームの表示状態
- フォームの入力値
- ローディング状態
- エラー状態
- 編集中のTODO情報

## イベントハンドリング
- タスクの追加
- タスクの編集
- タスクの削除
- タスクの完了状態変更
- お気に入り状態変更
- ソート順変更
- フォームの開閉

## スタイリング
### 使用するshadcn/uiコンポーネント
- Card（TODOアイテム用）
- Checkbox
- Button
- Sheet（フォーム用）
- Form
- Input
- DatePicker
- Select
- Dialog（削除確認用）

### カスタムスタイル
- 期限切れタスクの警告表示
- 完了タスクの表示スタイル
- お気に入りマークの表示
- アクションボタンの配置

## エラーハンドリング
- API通信エラー時のフォールバック
- バリデーションエラーの表示
- 削除時の確認
- オフライン時の対応

## パフォーマンス最適化
- 仮想スクロール
- メモ化による再レンダリング防止
- 楽観的更新
- キャッシュの活用
