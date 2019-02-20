import { Request, Response} from 'express';
import pool from '../database';
class TipoParroquiaController{
    // Listar todos los tipoParroquia
    public async list(req: Request, res:Response):Promise<void> {
        const tipoParroquia = await pool.query('SELECT * FROM t_tipo_parroquias');
         res.json(tipoParroquia);
    }
    //Listar solo un tipoParroquia por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const tipoParroquia = await pool.query('SELECT * FROM t_tipo_parroquias WHERE tparr_id = ? ', [id]);
        if(tipoParroquia.length > 0){
            return res.json(tipoParroquia[0]);
        }
        res.status(404).json({text:"la tipoParroquia no existe"});
        }

}

export const tipoParroquiaController = new TipoParroquiaController();
export default tipoParroquiaController;  