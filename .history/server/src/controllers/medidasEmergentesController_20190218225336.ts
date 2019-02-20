import { Request, Response} from 'express';
import pool from '../database';

class MedidasEmergentesController{
    // Listar todos los medidasEmergentes

    public async list(req: Request, res:Response):Promise<void> {
        const medidasEmergentes = await pool.query('SELECT * FROM t_medidas_emergentes');
         res.json(medidasEmergentes);
    }
    //Listar solo un medidasEmergentes por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const medidasEmergentes = await pool.query('SELECT * FROM t_medidas_emergentes WHERE me_id = ? ', [id]);
        if(medidasEmergentes.length > 0){
            return res.json(medidasEmergentes[0]);
        }
        res.status(404).json({text:"la medidasEmergentes no existe"});
        }
    //Crear una medidasEmergentes
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_medidas_emergentes set ?', [req.body]);
        res.json({message:'Creando una medidasEmergentes'})
    }
    // Actualizar una medidasEmergentes por ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_medidas_emergentes set ? WHERE me_id = ?', [req.body, id]);
          res.json({message:'La medidasEmergentes fue Actualizando'+ req.params.id})
      }
    // Eliminar una medidasEmergentes por ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_medidas_emergentes WHERE me_id = ?', [id]);
        res.json({message: 'La medidasEmergentes ha sido eliminado'})
    }
    
}

export const medidasEmergentesController = new MedidasEmergentesController();
export default medidasEmergentesController;  