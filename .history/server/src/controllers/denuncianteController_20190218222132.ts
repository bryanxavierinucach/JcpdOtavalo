import { Request, Response} from 'express';
import pool from '../database';

class DenuncianteController{
    // Listar todos los Denunciantes
    public async list(req: Request, res:Response) {
        const denunciante = await pool.query('SELECT * FROM t_denunciante');
         res.json({denunciante});
    }
    // Listar un denunciante por ID 
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const denunciante = await pool.query('SELECT * FROM t_denunciante WHERE dden_id = ? ', [id]);
        if(denunciante.length > 0){
            return res.json(denunciante[0]);
        }
        res.status(404).json({text:"el denunciante no existe"});
        
        //res.json({text:'listando un denunciante'+ req.params.id});
    }
    // Crear un nuevo DENUNCIANTE
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_denunciante set ?', [req.body]);
        res.json({message:'Creando un nuevo Denunciante'})
    }
    // Eliminar un denunciante por ID 
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_denunciante WHERE dden_id = ?', [id]);
        res.json({message: 'el denunciante ha sido eliminado'})
    }
    // Actualizar un denunciante por ID
    public update(req:Request, res:Response){
        const {id} = req.params;
        pool.query('UPDATE t_denunciante set ? WHERE dden_id ?', [req.body, id])
        res.json({message:'El denunciante fue Actualizando'+ req.params.id})
    }
}

export const denuncianteController = new DenuncianteController();
export default denuncianteController;  