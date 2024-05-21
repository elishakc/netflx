import express from "express";
const app = express();
app.use(express.json());

const PORT = 8001;

let movielist = [];

app.get("/sayhello", (req, res) => {
  return res.status(200).send("hello");
});

app.post("/movie/add", (req, res) => {
  let newmovielist = req.body;
  movielist.push(newmovielist);
  return res.status(201).send({ message: "adding" });
});

app.get("/movie/list", (req, res) => {
  return res.status(202).send({ movie: movielist });
});
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
//delete a movie 
app.delete("/movie/delete",(req,res)=>{

});