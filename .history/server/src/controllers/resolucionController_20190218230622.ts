import { Request, Response} from 'express';
import pool from '../database';
class ResolucionController{
    // Listar todos los resolucion
    public async list(req: Request, res:Response):Promise<void> {
        const resolucion = await pool.query('SELECT * FROM t_resolucion');
         res.json(resolucion);
    }
    //Listar solo un resolucion por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const resolucion = await pool.query('SELECT * FROM t_resolucion WHERE res_id = ? ', [id]);
        if(resolucion.length > 0){
            return res.json(resolucion[0]);
        }
        res.status(404).json({text:"la resolucion no existe"});
        }
    //Crear una resolucion
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_resolucion set ?', [req.body]);
        res.json({message:'Creando una resolucion'})
    }
    //Actualizar una resolucion por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_resolucion set ? WHERE res_id = ?', [req.body, id]);
          res.json({message:'La resolucion fue Actualizando'+ req.params.id})
      }
    // Eliminar una resolucion por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_resolucion WHERE res_id = ?', [id]);
        res.json({message: 'La resolucion ha sido eliminado'})
    }
    
}

export const resolucionController = new ResolucionController();
export default resolucionController;  