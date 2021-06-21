import { Router, Request, Response } from 'express';
import { PessoaController } from "../Controllers/PessoaController"

const router = Router();
const pessoaController = new PessoaController();

router.post("/pessoa/cadastrar", pessoaController.cadastrar);

router.get("/pessoa/listar", pessoaController.listar);

export { router };

