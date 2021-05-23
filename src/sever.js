import express from "express"

const app = express();

const PORT = 4000;

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handelHome = (req, res) => {
    return res.send("I still love you");
};

const handleLogin = (req, res) => {
    res.send("login here!");
}



app.get("/", handelHome);
app.get("/login", handleLogin);


const handleListening = () => {
    console.log(`Server listenting on port 4000 \n http://localhost:${PORT}`);
}

app.listen(PORT, handleListening)