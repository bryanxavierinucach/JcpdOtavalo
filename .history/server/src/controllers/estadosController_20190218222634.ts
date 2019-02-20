import { Request, Response} from 'express';
import pool from '../database';

class EstadosController{
    // Listar todos los estados

    public async list(req: Request, res:Response):Promise<void> {
        const estados = await pool.query('SELECT * FROM t_estados');
         res.json(estados);
    }
    //Listar solo un estados por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const estados = await pool.query('SELECT * FROM t_estados WHERE est_id = ? ', [id]);
        if(estados.length > 0){
            return res.json(estados[0]);
        }
        res.status(404).json({text:"el estado no existe"});
        }
    
}

export const estadosController = new EstadosController();
export default estadosController;  