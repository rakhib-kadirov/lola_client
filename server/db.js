// const Sidebar = require('./components/Sidebar.js');
// const MessagesList = require("./components/MessagesList.js")
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    database: "chat",
    password: "",
    credentials: true,
});

// тестирование подключения
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

const sql = `INSERT INTO users(names, text) VALUES('Bugs', 'Hi!')`

// const sql = `DELETE FROM users WHERE id=?`
// const data = [3]

connection.query(sql, function (err, results) {
    if (err) console.log(err);
    console.log(results);
});

// закрытие подключения
connection.end(function (err) {
    if (err) {
        return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});