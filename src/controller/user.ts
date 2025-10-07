import { User } from "../model/User";
import { app } from "../server";
import { UserService } from "../service/user";

export function userController() {
  const list: User[] = [];
  const service = new UserService(list);

  app.get("/users", (req, res) => {
    const users = service.getUsers();
    res.json(users);
  });

  app.post("/users", (req, res) => {
    const userData = req.body;
    const newUser = service.createUser(userData);
    res.status(201).json(newUser);
  });

  app.get("/users/search", (req, res) => {
    const { nome, idase } = req.query;

    if (nome) {
      const user = service.getUserByName(nome as string);
      if (user) {
        return res.status(200).json(user);
      }
    }

