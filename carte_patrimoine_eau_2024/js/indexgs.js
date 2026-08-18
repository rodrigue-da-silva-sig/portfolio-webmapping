const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(
    "/geoserver",
    createProxyMiddleware({
        target: "http://localhost:8080",
        changeOrigin: true
    })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/index", (req, res) => {
    res.render("index");
});

app.listen(8081, () => {
    console.log("Serveur GeoServer lancé sur http://localhost:8081");
});