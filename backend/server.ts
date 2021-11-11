import { http } from "./config/app";
import "./websocket/client";
import "./websocket/admin";
require('dotenv').config();
http.listen(process.env.BACKEND_PORT, () => console.log(`O servidor está rodando na porta  ${process.env.BACKEND_PORT} 🚀`));
