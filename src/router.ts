import { Router } from "express";
import { contatoController } from "./app/controller/ContatoController";
import { controller } from "./app/controller/Controller";


const router: Router = Router()

router.get("/", controller.home)

router.get("/agrotoxicos", controller.agrotoxicos)

router.get("/quemsomos", controller.quemsomos)

router.get("/contato", contatoController.contato)

router.post("/salvar/comentario" , contatoController.comentario)

export { router };