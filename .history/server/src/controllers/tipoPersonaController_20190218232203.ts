import { Request, Response} from 'express';
import pool from '../database';
class TipoPersonaController{
    // Listar todos los tipoPersona
    public async list(req: Request, res:Response):Promise<void> {
        const tipoPersona = await pool.query('SELECT * FROM t_tipo_persona');
         res.json(tipoPersona);
    }
    //Listar solo un tipoPersona por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const tipoPersona = await pool.query('SELECT * FROM t_tipo_persona WHERE tper_id = ? ', [id]);
        if(tipoPersona.length > 0){
            return res.json(tipoPersona[0]);
        }
        res.status(404).json({text:"la tipoPersona no existe"});
        }
    
}

export const tipoPersonaController = new TipoPersonaController();
export default tipoPersonaController;  