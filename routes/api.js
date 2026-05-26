import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    const { login, password } = req.body??{};
    console.log(login, password);
    
    // не правильный ввод
    if (!login || !password && (!password && !login)) {
        res.status(401).send({status: "error"});
    }
    // правильный вход
    if (login === "test" && password === "test") {
        res.status(200).send({status: "success"});
    }
    // не правильный вход
    else{
        res.status(501).send({status: "error"});
    }

});

export default router;