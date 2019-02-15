import { Request, Response} from 'express';
import pool from '../database';

class ProcoController{

    public async getAll(req: Request, res: Response ): Promise<any>{
        const proco = await pool.query('SELECT * FROM t_procesamiento_conocimiento')
        res.json(proco);
    }
    // Listar un procesamiento de conocimiento
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const proco = await pool.query('SELECT proco_id, proco_nombre FROM t_procesamiento_conocimiento WHERE proco_id = ? ', [id]);
        if(proco.length > 0){
            return res.json(proco[0]);
        }
        res.status(404).json({text:"el procesamiento no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }
}

export const procoController = new ProcoController();
export default procoController;  