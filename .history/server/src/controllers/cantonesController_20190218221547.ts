import { Request, Response} from 'express';
import pool from '../database';
class CantonesController{

    // Listar todos los cantones
    public async list(req: Request, res:Response):Promise<void> {
        const cantones = await pool.query('SELECT * FROM t_cantones');
         res.json(cantones);
    }

    //Listar solo un CANTON por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const cantones = await pool.query('SELECT * FROM t_cantones WHERE can_id = ? ', [id]);
        if(cantones.length > 0){
            return res.json(cantones[0]);
        }
        res.status(404).json({text:"el CANTÓN no existe"});
        }
}

export const cantonesController = new CantonesController();
export default cantonesController;  