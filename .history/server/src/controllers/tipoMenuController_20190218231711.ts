import { Request, Response} from 'express';
import pool from '../database';
class AuditoriaController{
    // Listar todos los auditoria
    public async list(req: Request, res:Response):Promise<void> {
        const auditoria = await pool.query('SELECT * FROM t_auditoria');
         res.json(auditoria);
    }
    //Listar solo un auditoria por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const auditoria = await pool.query('SELECT * FROM t_auditoria WHERE audi_id = ? ', [id]);
        if(auditoria.length > 0){
            return res.json(auditoria[0]);
        }
        res.status(404).json({text:"la auditoria no existe"});
        }
    //Crear una auditoria
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_auditoria set ?', [req.body]);
        res.json({message:'Creando una auditoria'})
    }
    //Actualizar una auditoria por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_auditoria set ? WHERE audi_id = ?', [req.body, id]);
          res.json({message:'La auditoria fue Actualizando'+ req.params.id})
      }
    // Eliminar una auditoria por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_auditoria WHERE audi_id = ?', [id]);
        res.json({message: 'La auditoria ha sido eliminado'})
    }
    
}

export const auditoriaController = new AuditoriaController();
export default auditoriaController;  