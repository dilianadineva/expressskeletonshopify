// Importing required modules
// const http = require('http');
let request = require('request');
// 23f061944af27484f8646484cbeaedf1
// 57b0abc4043a7ac32a0ec7c444951c64
// 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
// https://23f061944af27484f8646484cbeaedf1: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@37b8d0.myshopify.com/admin/api/2023-04/products.json
let url =
  'https://23f061944af27484f8646484cbeaedf1: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@37b8d0.myshopify.com/admin/api/2023-04/products.json';
// Creating the server
// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.setHeader('Content-Type', 'text/plain');

//   // Write the response body
//   res.end('Hello, World2!');
// });


const express = require('express');
const app = express();

let options = {
  method: 'GET',
  url: 'https://23f061944af27484f8646484cbeaedf1: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@37b8d0.myshopify.com/admin/api/2023-04/products.json',
//   headers: { 'Content-type': 'application/json' },
};

app.get('/data', (req, resp) => {
  request(options, (err, res) => {
    if (err) {
      console.log(err);
    }
    // resp.send("aaa");
    console.log(res.body);
    resp.send(res.body)
  });
});
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));


// echo "# expressskeletonshopify" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dilianadineva/expressskeletonshopify.git
// git push -u origin main

// …or push an existing repository from the command line
// git remote add origin https://github.com/dilianadineva/expressskeletonshopify.git
// git branch -M main
// git push -u origin main