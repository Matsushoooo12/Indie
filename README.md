# Indie

## エラー対応

```
Could not find gem 'rails (~> 6.0.0)' in locally installed gems.
```

このようなエラーが出た場合は以下のコマンドを実行

```
$ source ~/.bash_profile
```

## Rails Heroku デプロイコマンド

ルートディレクトリ上で

```
$ git subtree push --prefix backend/ heroku master
```
