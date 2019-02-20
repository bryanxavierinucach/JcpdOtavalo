import { Request, Response} from 'express';
import pool from '../database';
class TiposMedidasController{
    // Listar todos los tiposMedidas
    public async list(req: Request, res:Response):Promise<void> {
        const tiposMedidas = await pool.query('SELECT * FROM t_tipos_medidas');
         res.json(tiposMedidas);
    }
    //Listar solo un tiposMedidas por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const tiposMedidas = await pool.query('SELECT * FROM t_tipos_medidas WHERE tme_id = ? ', [id]);
        if(tiposMedidas.length > 0){
            return res.json(tiposMedidas[0]);
        }
        res.status(404).json({text:"la tiposMedidas no existe"});
        }
}

export const tiposMedidasController = new TiposMedidasController();
export default tiposMedidasController;  