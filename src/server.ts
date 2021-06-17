import express, { response } from 'express';

const app = express();

app.get("/", (req, res) =>{
    return res.json({
        message: "HELLO WORLD!"
    });
});

app.post("/", (req, res) => {
    return res.json({
        message: "DADOS SALVOS COM SUCESSO!"
    })
});

app.listen(3333, () => 
    console.log("Server is running on port 3333")
);