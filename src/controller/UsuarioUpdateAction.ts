import { Request, Response } from "express";
import { UsuarioService } from "../service/Usuario.service";

export async function usuarioUpdateAction(request: Request, resp: Response) {
    try {
        const service = new UsuarioService();
        const result = await service.alterarUsuario(request.body);
        resp.json(result);
    } catch (error) {
        return error;
    }
}
