// queries.js
import { pool } from "./db.js";

// OBTENER TODOS LOS POSTS
export const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

// AGREGAR UN NUEVO POST
export const addPost = async (titulo, likes = 0) => {
  const query = "INSERT INTO posts (titulo, likes) VALUES ($1, $2) RETURNING *";
  const values = [titulo, likes];
  const { rows } = await pool.query(query, values);
  return rows[0];
};
