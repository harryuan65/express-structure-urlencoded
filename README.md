# Express Tutorial: 基本架構、為何要用 urlencoded

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

4. 可以先把41行註解拿掉，找 log 中的 headers 那邊
5. 找到 'Content-Type' 'application/x-www-form-urlencoded` 這行，就是他害的
6. 把第 7 行註解拿掉，會發現正常運作了
