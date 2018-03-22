# 開發計畫

因為slack要錢所以來寫一個，加上不想用line辦公

## Tech

目前打算全部使用javascript來開發整個平台

也打算之後建立mobile version

- node.js
- sokcet.io
- react.js
- reactnative

## Features

- 團隊功能
    - 子團隊
    - 私密團隊
- 私聊
    - 文字
    - 圖片
    - 程式碼
    - 檔案
    - 標記人名 (@)
    - 標記內容 (星號)
    - 頻道佈告欄
- 搜尋歷史


---

# note

# backend

### nodemon

like webpack watch mode

`nodemon src/server.js`



### socket.io

# frontend

### webpack 4.0

setting in **webpack.config.js**

```
const path = require('path');

module.exports = {
    entry: './src/react/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    }
};
```


scripts in **package.json**

```
"scripts": {
  "watch": "webpack --mode development --watch",
  "build": "webpack --mode production"
},
```

### babel

install

`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react `

### react

install

`npm install --save react react-dom`
