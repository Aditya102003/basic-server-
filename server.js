const express = require('express')
// this app is the handler function which we were building by our own in the node.js so here express gives the inbuilt handler function 

const app =express();
app.use(express.json());
// this particular code builts the handler function for the home page 

// app is the handler function which make the handling of  req and res easier 

app.get('/', (req,res)=>{
 res.send("hello from the home page " + "HI "+" "+ req.query.name + " "+ req.query.age)
})

// const server = http.createServer(app);
app.get('/about', (req,res)=>{
     res.send(`Hello  ${req.query.name}`)
    })

    app.listen (8080, () => {
        console.log("SERVER IS RNNING ON PORT 8080")
    });
