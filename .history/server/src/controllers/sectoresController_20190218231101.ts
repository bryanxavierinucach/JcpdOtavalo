import { Request, Response} from 'express';
import pool from '../database';
class SectoresController{
    // Listar todos los sectores
    public async list(req: Request, res:Response):Promise<void> {
        const sectores = await pool.query('SELECT * FROM t_sectores');
         res.json(sectores);
    }
    //Listar solo un sectores por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const sectores = await pool.query('SELECT * FROM t_sectores WHERE sec_id = ? ', [id]);
        if(sectores.length > 0){
            return res.json(sectores[0]);
        }
        res.status(404).json({text:"la sectores no existe"});
        }
    //Crear una sectores
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_sectores set ?', [req.body]);
        res.json({message:'Creando una sectores'})
    }
    //Actualizar una sectores por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_sectores set ? WHERE sec_id = ?', [req.body, id]);
          res.json({message:'La sectores fue Actualizando'+ req.params.id})
      }
    // Eliminar una sectores por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_sectores WHERE sec_id = ?', [id]);
        res.json({message: 'La sectores ha sido eliminado'})
    }
    
}

export const sectoresController = new SectoresController();
export default sectoresController;  