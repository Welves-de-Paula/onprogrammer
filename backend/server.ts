import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";
const dotenv = require ('dotenv'); 
dotenv.config (); 
 http.listen(process.env.BACKEND_PORT, () => console.log(`Sua porta é ${process.env.BACKEND_PORT}`));
