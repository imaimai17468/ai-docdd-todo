# shadcn/ui コンポーネント使用計画

## インストールが必要なコンポーネント一覧
```bash
# サイドバー関連
npx shadcn-ui@latest add sidebar  # サイドバーコンポーネント

# レイアウト系
npx shadcn-ui@latest add sheet    # サイドメニュー、タスク追加・編集フォーム用
npx shadcn-ui@latest add separator # 区切り線
npx shadcn-ui@latest add card     # TODOアイテム用

# フォーム系
npx shadcn-ui@latest add form     # フォームのバリデーション
npx shadcn-ui@latest add input    # テキスト入力
npx shadcn-ui@latest add button   # ボタン
npx shadcn-ui@latest add checkbox # タスクの完了チェック
npx shadcn-ui@latest add select   # カテゴリ選択
npx shadcn-ui@latest add badge    # カテゴリ表示
npx shadcn-ui@latest add calendar # 日付選択
npx shadcn-ui@latest add popover  # カレンダー表示用

# フィードバック系
npx shadcn-ui@latest add toast    # 通知
npx shadcn-ui@latest add dialog   # 確認ダイアログ
npx shadcn-ui@latest add progress # 達成率表示

# その他
npx shadcn-ui@latest add dropdown-menu # メニュー
npx shadcn-ui@latest add tooltip  # ツールチップ
```

## コンポーネントごとの使用計画

### サイドバー
- Sheet: モバイル時のサイドバー表示
- Button: カテゴリ選択ボタン
- Separator: カテゴリ間の区切り線
- DropdownMenu: カテゴリの操作メニュー
- Dialog: カテゴリ削除確認

### TODOリスト
- Card: TODOアイテムのコンテナ
- Checkbox: タスク完了チェック
- Badge: カテゴリ表示
- Button: 各種アクション
- Tooltip: アクションボタンの説明
- DropdownMenu: ソート選択

### タスクフォーム
- Sheet: フォーム表示用コンテナ
- Form: フォームのバリデーション
- Input: タスク名入力
- Select: カテゴリ選択
- Calendar: 期限日選択
- Popover: カレンダー表示
- Button: 保存・キャンセル
- Toast: 保存完了通知

### 達成率グラフ
- Progress: 進捗バー
- Card: 各期間の達成率表示
- Button: 更新ボタン
- Toast: 更新完了通知

## 画面ごとの使用計画

### メイン画面
```typescript
// レイアウト
Sheet      // タスク追加・編集フォーム
Card       // TODOアイテム

// フォーム要素
Form       // タスク追加・編集フォーム
Input      // タスク名入力
Select     // カテゴリ選択
Calendar   // 期限選択
Checkbox   // タスク完了チェック
Button     // 各種アクション

// フィードバック
Toast      // 操作完了通知
Dialog     // 削除確認

// その他
Badge      // カテゴリ表示
Tooltip    // アクションボタンの説明
DropdownMenu // ソートメニュー
```

### サイドバー画面
```typescript
// レイアウト
Sheet      // モバイル表示時
Separator  // カテゴリ区切り

// 操作要素
Button     // カテゴリ選択
DropdownMenu // カテゴリ操作メニュー

// フィードバック
Dialog     // 削除確認
Toast      // 操作完了通知
```

### 達成率画面
```typescript
// レイアウト
Card       // 期間ごとの達成率

// 表示要素
Progress   // 進捗バー

// 操作要素
Button     // 更新ボタン

// フィードバック
Toast      // 更新完了通知
```
