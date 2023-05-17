import express, { Response, Request } from "express";
import Templates from "./templates"

var app = express();

app.get("/templates", function (req: Request, res: Response) {
  res.send(Templates);
});

app.get("/templates/:id", function (req: Request, res: Response) {
  const templates = Templates.find((t) => t.id === parseInt(req.params.id));
  res.send(templates);
});


app.get("/", function (req: Request, res: Response) {
  res.status(403).send('No Clue');
});


if (!module.parent) {
  app.listen(3001);
  console.log("Express started on port 3001");
}

export default app;
