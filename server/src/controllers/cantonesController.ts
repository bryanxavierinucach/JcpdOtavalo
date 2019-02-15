import { Request, Response} from 'express';
import pool from '../database';

class CantonesController{
    // Listar todos los cantones

    public async list(req: Request, res:Response):Promise<void> {
        const cantones = await pool.query('SELECT * FROM t_cantones');
         res.json(cantones);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const cantones = await pool.query('SELECT * FROM t_cantones WHERE can_id = ? ', [id]);
        if(cantones.length > 0){
            return res.json(cantones[0]);
        }
        res.status(404).json({text:"el juego no existe"});
        }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_cantones set ?', [req.body]);
        res.json({message:'Creando una cantones'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_cantones set ? WHERE can_id = ?', [req.body, id]);
          res.json({message:'La cantones fue Actualizando'+ req.params.id})
      }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_cantones WHERE can_id = ?', [id]);
        res.json({message: 'La cantones ha sido eliminado'})
    }
    
}

export const cantonesController = new CantonesController();
export default cantonesController;  