import { Request, Response} from 'express';
import pool from '../database';
class TipoMenuController{
    // Listar todos los auditoria
    public async list(req: Request, res:Response):Promise<void> {
        const auditoria = await pool.query('SELECT * FROM t_auditoria');
         res.json(auditoria);
    }
    //Listar solo un auditoria por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const auditoria = await pool.query('SELECT * FROM t_auditoria WHERE audi_id = ? ', [id]);
        if(auditoria.length > 0){
            return res.json(auditoria[0]);
        }
        res.status(404).json({text:"la auditoria no existe"});
        }
}

export const tipoMenuController = new TipoMenuController();
export default tipoMenuController;  