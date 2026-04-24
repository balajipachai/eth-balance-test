import express from "express";
import routes from "./src/routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
