# Express 基本架構、為何要用 urlencoded

## Setup

```bash
yarn install
nodemon app.js
```

## Usage

1. 到 localhost:5000/login 取得登入頁面
2. 填完資料送出
3. 會發現這46, 47兩行會壞掉

```javascript
  var email = req.body.email;
  var password = req.body.password;
```
