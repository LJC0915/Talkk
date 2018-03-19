const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);



app.get('/', (req, res) => {
    res.sendFile( __dirname + '/views/index.html');
});
app.get('/temp', (req, res) => {
    res.sendFile( __dirname + '/views/template.html');
});

// 加入線上人數計數
let onlineCount = 0;

// 修改 connection 事件
io.on('connection', (socket) => {
    // 有連線發生時增加人數
    onlineCount++;
    // 發送人數給網頁
    io.emit("online", onlineCount);

    socket.on("greet", () => {
        socket.emit("greet", onlineCount);
    });

    socket.on('disconnect', () => {
        // 有人離線了，扣人
        onlineCount = (onlineCount < 0) ? 0 : onlineCount-=1;
        io.emit("online", onlineCount);
    });

    socket.on("send", (msg) => {
        io.emit("msg", msg);
    });
});

// 注意，這邊的 server 原本是 app
server.listen(3000, () => {
    console.log("Server Started. http://localhost:3000");
});
