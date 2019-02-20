import { Request, Response} from 'express';
import pool from '../database';

class DiscapacidadController{
    
    public async list(req: Request, res:Response) {
        const discapacidad = await pool.query('SELECT * FROM t_discapacidad');
         res.json({discapacidad});
    }
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const discapacidad = await pool.query('SELECT * FROM t_discapacidad WHERE dis_id = ? ', [id]);
        if(discapacidad.length > 0){
            return res.json(discapacidad[0]);
        }
        res.status(404).json({text:"el discapacidad no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }
    
}

export const discapacidadController = new DiscapacidadController();
export default discapacidadController;  