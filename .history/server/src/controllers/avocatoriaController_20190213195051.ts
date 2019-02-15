import { Request, Response} from 'express';
import pool from '../database';

class AvocatoriaController{
    // Listar todos los avocatoria

    public async list(req: Request, res:Response):Promise<void> {
        const avocatoria = await pool.query('SELECT * FROM t_avocatoria');
         res.json(avocatoria);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const avocatoria = await pool.query('SELECT * FROM t_avocatoria WHERE avo_id = ? ', [id]);
        if(avocatoria.length > 0){
            return res.json(avocatoria[0]);
        }
        res.status(404).json({text:"el juego no existe"});
        }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_avocatoria set ?', [req.body]);
        res.json({message:'Creando una avocatoria'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_avocatoria set ? WHERE avo_id = ?', [req.body, id]);
          res.json({message:'La avocatoria fue Actualizando'+ req.params.id})
      }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_avocatoria WHERE avo_id = ?', [id]);
        res.json({message: 'La avocatoria ha sido eliminado'})
    }
    
}

export const avocatoriaController = new AvocatoriaController();
export default avocatoriaController;  