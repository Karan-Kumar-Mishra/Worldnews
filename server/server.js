import express from "express";
const app = express();
app.get('/', (req, res) => {
    res.send("ok");
})
app.listen(process.env.BACKEND_PORT || 80,() => {
    console.log("server is running ...")
})