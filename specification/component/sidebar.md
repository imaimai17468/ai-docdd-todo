# サイドバーコンポーネント設計

## 概要
アプリケーションの左側に配置されるサイドバーコンポーネント。
カテゴリ一覧の表示と操作を行う。

## コンポーネント構成
```
Sidebar/
├── index.tsx
├── CategoryList.tsx
├── CategoryItem.tsx
├── CategoryMenu.tsx
└── AddCategoryButton.tsx
```

## 各コンポーネントの責務

### Sidebar
- サイドバー全体のレイアウト管理
- モバイル表示時のハンバーガーメニュー制御
- 固定メニューとカテゴリリストの配置

#### Props
```typescript
interface SidebarProps {
  className?: string;
  isMobile?: boolean;
}
```

### CategoryList
- カテゴリ一覧の表示
- カテゴリデータの取得と状態管理
- カテゴリの選択状態管理

#### Props
```typescript
interface CategoryListProps {
  selectedCategoryId?: string;
  onSelectCategory: (categoryId: string) => void;
}
```

### CategoryItem
- 個別のカテゴリ項目の表示
- カテゴリのアイコン表示
- 三点リーダーメニューの表示制御
- 選択状態のスタイリング

#### Props
```typescript
interface CategoryItemProps {
  id: string;
  name: string;
  icon: string;
  isSelected: boolean;
  todoCount: number;
  onSelect: () => void;
  onOpenMenu: () => void;
}
```

### CategoryMenu
- カテゴリの編集メニュー
- 名前編集フォーム
- アイコン選択
- 削除確認ダイアログ

#### Props
```typescript
interface CategoryMenuProps {
  category: {
    id: string;
    name: string;
    icon: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (data: { name?: string; icon?: string }) => void;
  onDelete: () => void;
}
```

### AddCategoryButton
- カテゴリ追加ボタン
- カテゴリ作成フォームの表示制御

#### Props
```typescript
interface AddCategoryButtonProps {
  onCreate: (data: { name: string; icon: string }) => void;
}
```

## 状態管理
### グローバル状態
- 現在選択中のカテゴリID
- カテゴリ一覧データ

### ローカル状態
- モバイル表示時のメニュー表示状態
- カテゴリメニューの表示状態
- フォームの入力値
- ローディング状態
- エラー状態

## イベントハンドリング
- カテゴリ選択
- カテゴリ追加
- カテゴリ編集
- カテゴリ削除
- メニュー開閉
- モバイルメニュー開閉

## スタイリング
### 使用するshadcn/uiコンポーネント
- Sheet（モバイルメニュー用）
- Button
- Input
- Select（アイコン選択用）
- Dialog（削除確認用）
- Separator

### カスタムスタイル
- アクティブ状態のハイライト
- ホバー時の背景色変更
- アイコンとテキストの配置
- 三点リーダーの表示位置

## アニメーション
- メニューのスライドイン/アウト
- 選択状態の切り替わり
- ホバーエフェクト

## エラーハンドリング
- API通信エラー時のフォールバック
- バリデーションエラーの表示
- 削除時の確認

## アクセシビリティ
- キーボード操作
- スクリーンリーダー対応
- ARIAラベル
- フォーカス管理
