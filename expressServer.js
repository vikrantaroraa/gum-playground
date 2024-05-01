// we need this to run in a localhost context instead of file
// so that we can run enumerate devices (it must be run in a secure context)
// and localhost counts
// import express from "express";
// import path from "path";

const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname)));
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
