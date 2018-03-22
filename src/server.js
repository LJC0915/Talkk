const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path')


app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'));
});
app.get('/temp', (req, res) => {
    res.sendFile(path.resolve('./dist/template.html'));
});
app.get('/ct', (req, res) => {
    res.sendFile(path.resolve('./dist/chatandtemp.html'));
});
app.get('/react', (req, res) => {
    res.sendFile(path.resolve('./dist/react.html'));
});
// 加入線上人數計數
let onlineCount = 0;

// 修改 connection 事件
io.on('connection', (socket) => {
    // 有連線發生時增加人數
    onlineCount++;
    // 發送人數給網頁
    io.emit("online", onlineCount);
    // socket.on("changeroom", (room) => {
    //     socket.join(room);
    //     socket.room  = room;
    //     console.log('join room :' , room);
    // })

    socket.on("greet", () => {
        socket.emit("greet", onlineCount);
    });

    socket.on('disconnect', () => {
        // 有人離線了，扣人
        onlineCount = (onlineCount < 0)
            ? 0
            : onlineCount -= 1;
        io.emit("online", onlineCount);
    });

    socket.on("send", (msg) => {

        console.log(msg);
        // socket.broadcast.to(channel).emit(msg);
        msg.time = new Date()
        // io.in(socket.room ).emit("msg", msg);
        io.emit("msg", msg);
    });
});

// 注意，這邊的 server 原本是 app
server.listen(3000, () => {
    console.log("Server Started. http://localhost:3000");
});
