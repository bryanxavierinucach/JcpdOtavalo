import { Request, Response} from 'express';
import pool from '../database';
class TiposDerechosController{
    // Listar todos los tipoDerechos
    public async list(req: Request, res:Response):Promise<void> {
        const tipoDerechos = await pool.query('SELECT * FROM t_tipos_derechos');
         res.json(tipoDerechos);
    }
    //Listar solo un tipoDerechos por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const tipoDerechos = await pool.query('SELECT * FROM t_tipos_derechos WHERE tder_id = ? ', [id]);
        if(tipoDerechos.length > 0){
            return res.json(tipoDerechos[0]);
        }
        res.status(404).json({text:"la tipoDerechos no existe"});
        }

    
}

export const tiposDerechosController = new TiposDerechosController();
export default tiposDerechosController;  