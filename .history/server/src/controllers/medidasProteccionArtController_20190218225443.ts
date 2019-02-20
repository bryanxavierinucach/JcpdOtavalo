import { Request, Response} from 'express';
import pool from '../database';

class MedidasProteccionArtController{
    // Listar todos los medidasProteccionArt

    public async list(req: Request, res:Response):Promise<void> {
        const medidasProteccionArt = await pool.query('SELECT * FROM t_medidasProteccionArt');
         res.json(medidasProteccionArt);
    }
    //Listar solo un medidasProteccionArt por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const medidasProteccionArt = await pool.query('SELECT * FROM t_medidasProteccionArt WHERE avo_id = ? ', [id]);
        if(medidasProteccionArt.length > 0){
            return res.json(medidasProteccionArt[0]);
        }
        res.status(404).json({text:"la medidasProteccionArt no existe"});
        }
    //Crear una medidasProteccionArt
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_medidasProteccionArt set ?', [req.body]);
        res.json({message:'Creando una medidasProteccionArt'})
    }
    // Actualizar una medidasProteccionArt por ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_medidasProteccionArt set ? WHERE avo_id = ?', [req.body, id]);
          res.json({message:'La medidasProteccionArt fue Actualizando'+ req.params.id})
      }
    // Eliminar una medidasProteccionArt por ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_medidasProteccionArt WHERE avo_id = ?', [id]);
        res.json({message: 'La medidasProteccionArt ha sido eliminado'})
    }
    
}

export const medidasProteccionArtController = new MedidasProteccionArtController();
export default medidasProteccionArtController;  