import express from "express"
import morgan from "morgan"

const app = express();
const logger = morgan("dev");

const PORT = 4000;

const handelHome = (req, res) => {
    return res.send("I still love you");
};

const handleLogin = (req, res) => {
    res.send("login here!");
}


app.use(logger);
app.get("/", handelHome);
app.get("/login", handleLogin);


const handleListening = () => {
    console.log(`Server listenting on port 4000 \n http://localhost:${PORT}`);
}

app.listen(PORT, handleListening)