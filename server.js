import "dotenv/config";
import app from "./src/app.js";


const PORT = 8080;


//const server = http.createServer((req, res) => {
//  res.writeHead(200, {"Content-type": "text/plain"});
//res.end(rotas[req.url]);
//} );

app.listen(PORT, () => {
    console.log("servidor escutando!");
} );