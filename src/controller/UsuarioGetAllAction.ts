import { Request, Response } from "express";
import { UsuarioService } from "../service/Usuario.service";

export async function usuarioGetAllAction(request: Request, resp: Response) {

    try {
        const service = new UsuarioService();
        const result = await service.buscarUsuario();
        resp.json(result);
    } catch (error) {
        return error;
    }
}