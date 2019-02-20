import { Request, Response} from 'express';
import pool from '../database';
class ParroquiasController{
    // Listar todos los parroquias
    public async list(req: Request, res:Response):Promise<void> {
        const parroquias = await pool.query('SELECT * FROM t_parroquias');
         res.json(parroquias);
    }
    //Listar solo un parroquias por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const parroquias = await pool.query('SELECT * FROM t_parroquias WHERE parr_id = ? ', [id]);
        if(parroquias.length > 0){
            return res.json(parroquias[0]);
        }
        res.status(404).json({text:"la parroquias no existe"});
        }
    //Crear una parroquias
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_parroquias set ?', [req.body]);
        res.json({message:'Creando una parroquias'})
    }
    //Actualizar una parroquias por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_parroquias set ? WHERE parr_id = ?', [req.body, id]);
          res.json({message:'La parroquias fue Actualizando'+ req.params.id})
      }
    // Eliminar una parroquias por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_parroquias WHERE parr_id = ?', [id]);
        res.json({message: 'La parroquias ha sido eliminado'})
    }
    
}

export const parroquiasController = new ParroquiasController();
export default parroquiasController;  