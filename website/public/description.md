# サポートスクリプト

![GitHub Release](https://img.shields.io/github/v/release/toakiryu/support-scripts)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/toakiryu/support-scripts)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/toakiryu/support-scripts)
![GitHub Discussions](https://img.shields.io/github/discussions/toakiryu/support-scripts)
![GitHub License](https://img.shields.io/github/license/toakiryu/support-scripts)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fsupport-scripts.toakiryu.com%2F)

このプロジェクトは、Minecraftにおけるアイテムやブロックをリサイクル可能にするためのレシピを追加し、新たなクラフト体験を提供するデータパックです。

- [バージョン](#バージョン)
- [使い方](#使い方)
  - [位置情報](#1-位置情報)
  - [位置情報の表示](#2-位置情報の表示)
    - [有効化](#有効化)
    - [無効化](#無効化)
  - [アンインストール](#3-アンインストール)
- [動画・配信について](#動画配信について)

---

## バージョン

将来的なバージョンアップや互換性の更新については、[リポジトリ](https://github.com/toakiryu/support-scripts)の更新情報をご確認ください。

---

## 使い方

このデータパックは以下の主要機能を提供しています。

### 1. 位置情報

プレイヤーの位置情報（x,y,z）と視点情報（rx,ry）をスコアボードに出力します。この情報の取得元はプレイヤーデータから取得してそれを扱いやすい様にスコアボードにプレイヤーごとに出力しています。

---

### 2. 位置情報の表示

アクションバーに自分の座標と向きを表示させる機能です。有効化と無効化は以下のコマンドを実行することで簡単に切り替えることができます。

#### 有効化

```command
/function support-scripts:setting/show-actionbar/true
```

#### 無効化

```command
/function support-scripts:setting/show-actionbar/false
```

---

### 3. アンインストール

データパック無効化後もスコアボードなどの関連データが残ることを防ぐため、アンインストール関数を実行することを推奨します。削除の際は以下のコマンドを使用した後、データパックをフォルダから削除してください。

```command
/function support-scripts:uninstall
```

---

## 動画・配信について

データパックを使用した動画や配信を行う際は、概要欄やコメント欄など視聴者が確認できる場所にクレジットの記載をお願いします。以下は例です：

```text
▼ サポートスクリプト / 制作: 桐生トア
https://support-scripts.toakiryu.com
```

二次配布および自作発言は固くお断りしています。不具合やバグの報告は[こちら](https://github.com/toakiryu/support-scripts/issues)からお願いいたします。
