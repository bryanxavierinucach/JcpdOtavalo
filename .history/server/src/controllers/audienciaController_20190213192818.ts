import { Request, Response} from 'express';
import pool from '../database';

class AudienciaController{
    // Listar todos los audiencia

    public async list(req: Request, res:Response):Promise<void> {
        const audiencia = await pool.query('SELECT * FROM t_audiencia');
         res.json(audiencia);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const audiencia = await pool.query('SELECT * FROM t_audiencia WHERE rau_id = ? ', [id]);
        if(audiencia.length > 0){
            return res.json(audiencia[0]);
        }
        res.status(404).json({text:"el juego no existe"});
        }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_audiencia set ?', [req.body]);
        res.json({message:'Creando una audiencia'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_audiencia set ? WHERE rau_id = ?', [req.body, id]);
          res.json({message:'La audiencia fue Actualizando'+ req.params.id})
      }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_audiencia WHERE rau_id = ?', [id]);
        res.json({message: 'La audiencia ha sido eliminado'})
    }
    
}

export const audienciaController = new AudienciaController();
export default audienciaController;  