import { Request, Response } from "express";

class Controller{

  public async home(req:Request, res:Response) {
    return res.render("home")
  }

  public async agrotoxicos(req:Request, res: Response) {
    return res.render("agrotoxicos")
  }

  public async quemsomos(req:Request, res:Response) {
    return res.render("quemsomos")
  }

}

export const controller = new Controller();