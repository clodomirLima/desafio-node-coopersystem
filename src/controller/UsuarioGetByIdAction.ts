import { Request, Response } from "express";
import { UsuarioService } from "../service/Usuario.service";

export async function usuarioGetByIdAction(request: Request, resp: Response) {
    try {
        const service = new UsuarioService();
        const result = await service.buscarUsuarioId(request.params.id);
        resp.json(result);
    } catch (error) {
        return error;
    }
}
