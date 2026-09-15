import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log("Database:", result.rows);
  return response.status(200).json({ chave: "online" });
}

export default status;
