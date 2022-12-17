import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from './routes/index.js'

const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url)); //to get absolute path


//Environment variable
const port = process.env.PORT || 3000; 
app.listen(port); 


app.set("views", join(__dirname, "views"));
//to say where the VIEWS folder is located
app.set("view engine", "ejs");

app.use(indexRoutes)

app.use(express.static(join(__dirname,'public')))

console.log( `server is listening on port ${port}`);


