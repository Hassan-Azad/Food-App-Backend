const path = require('path');
const { URL } = require('url');

const express = require('express')

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename);
// const __filename = new URL('', import.meta.url).pathname;
// const __dirname = path.dirname(__filename);
console.log("this is dirname",__dirname);

const app = express()
const port = 5000


const mongoDB = require("./db");

mongoDB();


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.json());
app.use('/api', require('./Routes/CreatUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));


// use the client app
app.use(express.static(path.join(__dirname, '/Client/build')))

// Render client for any path
app.get('*',(req, res)=> 
  res.sendFile(path.join(__dirname, '/Client/build/index.html'))
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})