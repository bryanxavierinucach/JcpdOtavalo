import { Request, Response} from 'express';
import pool from '../database';

class EstadosController{
    // Listar todos los estados

    public async list(req: Request, res:Response):Promise<void> {
        const estados = await pool.query('SELECT * FROM t_estados');
         res.json(estados);
    }
    //Listar solo un estados por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const estados = await pool.query('SELECT * FROM t_estados WHERE avo_id = ? ', [id]);
        if(estados.length > 0){
            return res.json(estados[0]);
        }
        res.status(404).json({text:"el estado no existe"});
        }
    //Crear una estados
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_estados set ?', [req.body]);
        res.json({message:'Creando una estado'})
    }
    // Actualizar una estados por ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_estados set ? WHERE avo_id = ?', [req.body, id]);
          res.json({message:'el estado fue Actualizando'+ req.params.id})
      }
    // Eliminar una estados por ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_estados WHERE avo_id = ?', [id]);
        res.json({message: 'La estados ha sido eliminado'})
    }
    
}

export const estadosController = new EstadosController();
export default estadosController;  