const express = require("express");
const app = express();
const port = 8000;

const users =[
  {id:1,firstName:"Gary", lastName:"Du Mond"},
  {id:2,firstName:"Sarah", lastName:"Diller"},
  {id:3,firstName:"Cristina", lastName:"M."},
  {id:4,firstName:"Mike", lastName:"Lyones"}
]


app.use( express.json() )
app.use(express.urlencoded({extended:true}))

// req is short for request
// res is short for response
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  res.json(users[req.params.id])
})

app.post("/api/users", (req,res) => {
  users.push(req.body)
  res.json({msg:"created"})
})

app.put("/api/users/:id", (req,res) =>{
  const id = req.params.id
  users[id] = req.body
  res.json({msg:`updated ${id}`})
})

app.delete("/api/users/:id", (req,res) =>{
  const id = req.params.id
  users.splice(id,1)
  res.json({msg:`Deleted ${id}`})
})


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Running...:: http://localhost:${port}`) );