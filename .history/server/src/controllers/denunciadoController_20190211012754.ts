import { Request, Response} from 'express';
import pool from '../database';
import { promises } from 'fs';

class DenunciadoController{
    public async list(req: Request, res:Response) {
        const denunciado = await pool.query('SELECT * FROM t_denunciado');
         res.json({denunciado});
    }
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const denunciado = await pool.query('SELECT * FROM t_denunciado WHERE dag_id = ? ', [id]);
        if(denunciado.length > 0){
            return res.json(denunciado[0]);
        }
        res.status(404).json({text:"el juego no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_denunciado set ?', [req.body]);
        res.json({message:'Creando un caso'})
    }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_denunciado WHERE dag_id = ?', [id]);
        res.json({message: 'El juego ha sido eliminado'})
    }
    public update(req:Request, res:Response){
        const {id} = req.params;
        pool.query('UPDATE t_denunciado set ? WHERE dag_id ?', [req.body, id])
        res.json({message:'El caso fue Actualizando'+ req.params.id})
    }
}

export const denunciadoController = new DenunciadoController();
export default denunciadoController;  