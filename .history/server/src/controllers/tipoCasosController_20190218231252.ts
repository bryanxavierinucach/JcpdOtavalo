import { Request, Response} from 'express';
import pool from '../database';
class TipoCasosController{
    // Listar todos los tipoCasos
    public async list(req: Request, res:Response):Promise<void> {
        const tipoCasos = await pool.query('SELECT * FROM t_tipo_casos');
         res.json(tipoCasos);
    }
    //Listar solo un tipoCasos por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const tipoCasos = await pool.query('SELECT * FROM t_tipo_casos WHERE tica_id = ? ', [id]);
        if(tipoCasos.length > 0){
            return res.json(tipoCasos[0]);
        }
        res.status(404).json({text:"la tipoCasos no existe"});
        }
    
}

export const tipoCasosController = new TipoCasosController();
export default tipoCasosController;  