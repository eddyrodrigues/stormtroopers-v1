import { Router} from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

var errorHandler = Router();


errorHandler.use((req, res, next) => {
    res.status(404).header('content-type', 'text/html').sendFile(path.join(__dirname, './../../views/erros/404.html'));
});

export default errorHandler;