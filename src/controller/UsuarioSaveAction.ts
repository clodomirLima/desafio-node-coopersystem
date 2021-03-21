import { Request, Response } from "express";
import { UsuarioService } from "../service/Usuario.service";

export async function usuarioSaveAction(request: Request, resp: Response) {
    try {
        const service = new UsuarioService();
        const result = await service.salvarUsuario(request.body);
        resp.json(result);
    } catch (error) {
        return error;
    }
}