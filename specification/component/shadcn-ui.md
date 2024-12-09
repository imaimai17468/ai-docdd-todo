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

## スタイルカスタマイズ

### カラーテーマ
```typescript
// ベースカラー
primary: "#0EA5E9"    // Sky Blue
secondary: "#6B7280"  // Gray
accent: "#F59E0B"     // Amber

// 状態カラー
success: "#22C55E"    // Green
warning: "#F59E0B"    // Amber
danger: "#EF4444"     // Red
```

### アニメーション
```typescript
// トランジション
transition: {
  DEFAULT: "all 0.3s ease",
  fast: "all 0.15s ease",
  slow: "all 0.5s ease",
}

// アニメーション
keyframes: {
  slideIn: { ... },
  fadeIn: { ... },
  scaleUp: { ... },
}
```

## アクセシビリティ対応
- すべてのインタラクティブ要素にツールチップを追加
- フォーム要素にラベルとヘルプテキストを追加
- エラーメッセージは色だけでなくアイコンと文章で表示
- キーボード操作のフォーカス表示を明確に

## サイドバーの実装計画

### 基本構造
```typescript
// app/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

// components/app-sidebar.tsx
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "ホーム",
    url: "/",
    icon: Home,
  },
  {
    title: "受信トレイ",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "カレンダー",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "検索",
    url: "/search",
    icon: Search,
  },
  {
    title: "設定",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>アプリケーション</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

### スタイル設定
```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 0 0% 98%;
    --sidebar-primary-foreground: 240 5.9% 10%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

### カスタマイズオプション
- `side`: サイドバーの位置（"left" | "right"）
- `variant`: サイドバーのバリアント（"sidebar" | "floating" | "inset"）
- `collapsible`: 折りたたみ方式（"offcanvas" | "icon" | "none"）

### 状態管理
```typescript
const {
  state,          // 'expanded' | 'collapsed'
  open,           // boolean
  setOpen,        // (open: boolean) => void
  openMobile,     // boolean
  setOpenMobile,  // (open: boolean) => void
  isMobile,       // boolean
  toggleSidebar,  // () => void
} = useSidebar()
```

### キーボードショートカット
- デフォルト: Mac = cmd+b, Windows = ctrl+b
- カスタマイズ: `SIDEBAR_KEYBOARD_SHORTCUT`変数で変更可能

### 永続化
- Cookieを使用して状態を保存
- デフォルトのCookie名: `sidebar:state`
- カスタマイズ: `SIDEBAR_COOKIE_NAME`変数で変更可能
