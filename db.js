import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "likeme",
  port: 5432,
  allowExitOnIdle: true
});

try {
  await pool.query("SELECT NOW()");
  console.log("💾 Conectado a PostgreSQL");
} catch (error) {
  console.log("Error conectando a BD:", error);
}
