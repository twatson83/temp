import express from "express";
import http from "http";
import routes from "./routes";
import bodyParser from "body-parser";


export default function(callback) {
    let app = express(),
        server = http.createServer(app);

    if (process.env.NODE_ENV === "production"){
        app.use(express.static('dist'));
    }

    app.use(bodyParser.json());
    app.use(express.static('client/public'));
    app.use(routes);

    server.listen(5000, () => callback(app));
}
