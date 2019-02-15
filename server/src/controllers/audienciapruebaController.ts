import { Request, Response} from 'express';
import pool from '../database';

class AudienciaPuebaController{
    // Listar todos los audienciaprueba

    public async list(req: Request, res:Response):Promise<void> {
        const audienciaprueba = await pool.query('SELECT * FROM t_audienciaprueba');
         res.json(audienciaprueba);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const audienciaprueba = await pool.query('SELECT * FROM t_audienciaprueba WHERE apr_id = ? ', [id]);
        if(audienciaprueba.length > 0){
            return res.json(audienciaprueba[0]);
        }
        res.status(404).json({text:"la audienciaprueba no existe"});
        }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_audienciaprueba set ?', [req.body]);
        res.json({message:'Creando una audienciaprueba'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_audienciaprueba set ? WHERE apr_id = ?', [req.body, id]);
          res.json({message:'La audienciaprueba fue Actualizando'+ req.params.id})
      }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_audienciaprueba WHERE apr_id = ?', [id]);
        res.json({message: 'La audienciaprueba ha sido eliminado'})
    }
    
}

export const audienciaPuebaController = new AudienciaPuebaController();
export default audienciaPuebaController;  