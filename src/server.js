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
var numUsers = 0;

// 修改 connection 事件
io.on('connection', (socket) => {
    var addedUser = false;
    // 發送人數給網頁

    io.emit("online", numUsers);
    // socket.on("changeroom", (room) => {
    //     socket.join(room);
    //     socket.room  = room;
    //     console.log('join room :' , room);
    // })
    socket.on('add user', (username) => {
        if (addedUser)
            return;

        // we store the username in the socket session for this client
        this.username = username;

        ++numUsers;
        addedUser = true;

        socket.emit('login', numUsers);
        socket.broadcast.emit('user joined', {
            username: username,
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        // socket.broadcast.emit('user joined', {
        //     username: socket.username,
        //     numUsers: numUsers
        // });
    });
    // socket.on('disconnect', () => {
    //      有人離線了，扣人
    //     numUsers = (numUsers < 0)
    //         ? 0
    //         : numUsers -= 1;
    //     io.emit("online", numUsers);
    // });

    socket.on("send", (msg) => {
        // socket.broadcast.to(channel).emit(msg);
        msg.time = new Date()
        msg.username = this.username;
        console.log(msg);
        // io.in(socket.room ).emit("msg", msg);
        socket.broadcast.emit("msg", msg);
    });

    socket.on('disconnect', () => {
        if (addedUser) {
            --numUsers;
            socket.broadcast.emit('user left', {
                username: this.username,
                numUsers: numUsers
            });
        }
    });
});

// 注意，這邊的 server 原本是 app
server.listen(3000, () => {
    console.log("Server Started. http://localhost:3000");
});
