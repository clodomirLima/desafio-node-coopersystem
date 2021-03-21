import { getHeaderSpan, setTagSpan, traceable } from "jaeger-tracer-decorator";
import { getConnection } from "typeorm";
import { Usuario } from "../entity/Usuario";

@traceable()
export class UsuarioService {
    @setTagSpan("UsuarioService")

    @getHeaderSpan()
    private tracerHeader: any;

    private conexaoDb = getConnection();

    public async salvarUsuario(req: any): Promise<any> {
        try {
            const body = {
                id: req.id,
                cpf: req.cpf,
                email: req.email,
                perfil: req.perfil,
            };
            const inserir = await this.conexaoDb.createQueryBuilder()
                .createQueryBuilder()
                .insert()
                .into(Usuario)
                .values([
                    { email: body.email, cpf: body.cpf, perfil: body.perfil }
                ])
                .execute();

            if (inserir) {
                return {
                    message: "Usuario Salvo com Sucesso!"
                }
            }
        } catch (error) {
            return error;
        }
    }

    public async buscarUsuario(): Promise<any> {
        try {
            const listaUsuario = await this.conexaoDb.createQueryBuilder()
                .select("usuario")
                .from(Usuario, "usuario")
                .getMany();

            return listaUsuario;
        } catch (error) {
            return error;
        }
    }

    public async buscarUsuarioId(id: string): Promise<any> {
        try {
            const listaUsuario = await this.conexaoDb.createQueryBuilder()
                .select("usuario")
                .from(Usuario, "usuario")
                .where("id=:id", { id: id })
                .getMany();
            return listaUsuario;
        } catch (error) {
            return error;
        }
    }


    public async alterarUsuario(req: any): Promise<any> {
        try {
            const body = {
                id: req.id,
                cpf: req.cpf,
                email: req.email
            };
            const alteraUsuario = await this.conexaoDb.createQueryBuilder()
                .update(Usuario)
                .set({ email: body.email, cpf: body.cpf })
                .where("id=:id", { id: body.id })
                .execute();

            if (alteraUsuario) {
                return {
                    message: "Usuario Alterado Com Sucesso!",
                }
            }
        } catch (error) {
            return error;
        }
    }

}
