import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({
    status: "Error ",
    mansage: err.message,
  });
});

app.listen(3000, () => console.log("server is running on port 3000"));
