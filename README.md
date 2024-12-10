このリポジトリは、Cursor ComposerのAgentを活用して、ドキュメント駆動開発（DocDD）を試すためのプロジェクトです。以下にリポジトリの概要と使用方法を記載します。

## プロジェクト概要

このプロジェクトは、Next.jsをベースにしたTODOアプリケーションです。Cloudflare Pagesと統合されており、ドキュメント駆動開発の手法を用いて設計されています。アプリケーションは、タスクの管理、カテゴリの設定、達成率の表示などの機能を提供します。

## Getting Started

開発サーバーを起動するには、以下のコマンドを実行してください。

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて、アプリケーションを確認できます。

## Cloudflare Integration

このプロジェクトはCloudflare Pagesと統合されており、以下のスクリプトを使用してビルド、プレビュー、デプロイが可能です。

- `pages:build`: Cloudflare Pages用にアプリケーションをビルドします。
- `preview`: ローカルでPagesアプリケーションをプレビューします。
- `deploy`: Pagesアプリケーションをデプロイします。

## ドキュメント構成

プロジェクトの設計ドキュメントは、以下のディレクトリに整理されています。

- `specification/main.md`: プロジェクトの概要と要件
- `specification/checklist.md`: 開発チェックリスト
- `specification/structure.md`: ドキュメント構成の説明
- `specification/domain/`: 画面設計
- `specification/api/`: API設計
- `specification/component/`: コンポーネント設計

## 使用技術

- **Next.js**: フロントエンドフレームワーク
- **Cloudflare Pages**: デプロイ先プラットフォーム
- **shadcn/ui**: UIコンポーネントライブラリ
- **drizzle-orm**: データベースORM
- **wrangler**: Cloudflare Workers CLI

## 環境設定

- **Biome**: コードフォーマットとリントの設定
- **lefthook**: Gitフックの設定
- **shadcn/ui**: UIコンポーネントの設定

## DB設定

- **drizzle**: スキーマ定義とマイグレーション
- **Cloudflare D1**: データベース連携

## テスト

- **Unit Test**: コンポーネントの単体テスト
- **E2E Test**: 画面のエンドツーエンドテスト

このリポジトリは、ドキュメント駆動開発の実践を通じて、効率的な開発プロセスを実現することを目的としています。各設計ドキュメントを参照しながら、開発を進めてください。
