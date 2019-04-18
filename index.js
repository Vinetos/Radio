import express from "express";

const app = express();
const port = process.env.PORT || 4000;

const server = app.listen(port, () => console.log('Radio server started on: ' + port));
