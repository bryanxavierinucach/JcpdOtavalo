import { Request, Response} from 'express';
import pool from '../database';

class IdentidadController{
    // Listar todos los identidad

    public async list(req: Request, res:Response):Promise<void> {
        const identidad = await pool.query('SELECT * FROM t_identidad');
         res.json(identidad);
    }
    //Listar solo un identidad por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const identidad = await pool.query('SELECT * FROM t_identidad WHERE gene_id = ? ', [id]);
        if(identidad.length > 0){
            return res.json(identidad[0]);
        }
        res.status(404).json({text:"el identidad no existe"});
        }
    
}

export const identidadController = new IdentidadController();
export default identidadController;  