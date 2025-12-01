import express from "express";
import cors from "cors";
import { getPosts, addPost } from "./queries.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET /posts - devuelve todos los registros
app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error obteniendo posts" });
  }
});

// POST /posts - agrega un nuevo registro
app.post("/posts", async (req, res) => {
  try {
    const { titulo } = req.body;
    if (!titulo) {
      return res.status(400).json({ message: "Falta el título" });
    }
    const nuevo = await addPost(titulo, 0);
    res.status(201).json(nuevo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error agregando post" });
  }
});

app.listen(3000, () => console.log("Servidor encendido en http://localhost:3000"));
