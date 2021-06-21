import { request, Request, Response } from 'express';
import PessoaSchema from '../models/PessoaSchema';

class PessoaController {
  async listar(request: Request, response: Response) {
    const pessoaCad = await PessoaSchema.find();
    response.status(200).json(pessoaCad);
  }


  async cadastrar(request: Request, response: Response) {
    try {
      const novaPessoaCad = await PessoaSchema.create(request.body);
      response.status(201).json
        ({
          objeto: novaPessoaCad,
          msg: "Pessoa cadastrada com sucesso",
          erro: false
        });
    } catch (error) {
      response.status(400).json
        ({
          objeto: error,
          msg: "erro na validação",
          erro: true
        });
    }
  }

}

export { PessoaController };