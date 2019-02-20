import { Request, Response} from 'express';
import pool from '../database';
import { promises } from 'fs';

class AfectadoController{
    // Listar todos los afectados

    public async list(req: Request, res:Response) {
        const afectado = await pool.query('SELECT * FROM t_datosafectado');
         res.json(afectado);
    }

    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const afectado = await pool.query('SELECT * FROM t_datosafectado WHERE daf_id = ? ', [id]);
        if(afectado.length > 0){
            return res.json(afectado[0]);
        }
        res.status(404).json({text:"el juego no existe"});
        //res.json({text:'listando un caso'+ req.params.id});
    }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_datosafectado set ?', [req.body]);
        res.json({message:'Creando un caso'})
    }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_datosafectado WHERE daf_id = ?', [id]);
        res.json({message: 'El juego ha sido eliminado'})
    }
    public update(req:Request, res:Response){
        const {id} = req.params;
        pool.query('UPDATE t_datosafectado set ? WHERE daf_id ?', [req.body, id])
        res.json({message:'El caso fue Actualizando'+ req.params.id})
    }
}

export const afectadoController = new AfectadoController();
export default afectadoController;  