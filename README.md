# Mystery Dungeon RTA FES 2 Layouts
第2回不思議のダンジョンシリーズRTAフェスというイベント用に作成したNodeCGのbundleです。  
This is the [NodeCG](http://github.com/nodecg/nodecg) bundle used for the streaming overlay in Mystery Dungeon RTA FES 2.  

## Installation
- NodeCGを何らかの方法でインストールします。(おすすめはnodecg-cliの実行)
- `/bundle`ディレクトリ内に必要なbundleのインストールを行います。
  - 当bundle
  - [yagamuu/nodecg-speedcontrol(fork)](https://github.com/yagamuu/nodecg-speedcontrol)
  - [speedcontrol-additions](https://github.com/cma2819/speedcontrol-additions)
  - [nodecg-twitter-widget](https://github.com/cma2819/nodecg-twitter-widget)
  - [nodecg-spotify-widget](https://github.com/cma2819/nodecg-spotify-widget)

### インストール手順例
```
npm install nodecg-cli -g
nodecg setup
nodecg install yagamuu/mysrtafes2021-layouts
nodecg install yagamuu/nodecg-speedcontrol
nodecg install cma2819/speedcontrol-additions
nodecg install cma2819/nodecg-twitter-widget
nodecg install cma2819/nodecg-spotify-widget
```
- nodecg-speedcontrolのbranchを`mysrtafes2021`に変更する。
  ※`speedcontrol-additions`を正常に動作させるために必要
- NodeCGをインストールしたディレクトリ内の`/cfg`ディレクトリに各bundleのコンフィグファイルを作成する。
  ※ツイート表示、Spotify連携等に必要

## Usage
- `npm run start`を実行しNodeCGを起動する。

## Credits
- [NodeCG](https://github.com/nodecg/nodecg): Main framework.
- [nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol): NodeCG bundle for broadcast graphics framework/application.
- [nodecg-vue-ts-template](https://github.com/zoton2/nodecg-vue-ts-template): Template for NodeCG bundles that use Vue.js and TypeScript.
- [speedcontrol-additions](https://github.com/cma2819/speedcontrol-additions): NodeCG layout bundle for adding information to nodecg-speedcontrol.
- [nodecg-twitter-widget](https://github.com/cma2819/nodecg-twitter-widget): NodeCG layout bundle for showing tweet.
- [nodecg-spotify-widget](https://github.com/cma2819/nodecg-spotify-widget): NodeCG layout bundle for showing spotify information.
- [ponzu](https://twitter.com/ponzu24): Graphics design.