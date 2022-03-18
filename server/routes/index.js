import { Router } from "express";

var routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({
        "message": "Welcome soldier!"
    })
});

export default routes;