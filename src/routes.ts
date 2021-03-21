import { usuarioGetAllAction } from "./controller/UsuarioGetAllAction";
import { usuarioGetByIdAction } from "./controller/UsuarioGetByIdAction";
import { usuarioSaveAction } from "./controller/UsuarioSaveAction";
import { usuarioUpdateAction } from "./controller/UsuarioUpdateAction";

export const AppRoutes = [
    {
        path: "/usuario",
        method: "get",
        action: usuarioGetAllAction
    },
    {
        path: "/usuario/:id",
        method: "get",
        action: usuarioGetByIdAction
    },
    {
        path: "/usuario",
        method: "post",
        action: usuarioSaveAction
    },
    {
        path: "/usuario",
        method: "put",
        action: usuarioUpdateAction
    },
];