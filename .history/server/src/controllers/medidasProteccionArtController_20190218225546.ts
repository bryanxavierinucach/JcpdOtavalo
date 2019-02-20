import { Request, Response} from 'express';
import pool from '../database';

class MedidasProteccionArtController{
    // Listar todos los medidasProteccionArt

    public async list(req: Request, res:Response):Promise<void> {
        const medidasProteccionArt = await pool.query('SELECT * FROM t_medidas_proteccion_art');
         res.json(medidasProteccionArt);
    }
    //Listar solo un medidasProteccionArt por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const medidasProteccionArt = await pool.query('SELECT * FROM t_medidas_proteccion_art WHERE mpa_id = ? ', [id]);
        if(medidasProteccionArt.length > 0){
            return res.json(medidasProteccionArt[0]);
        }
        res.status(404).json({text:"la medidasProteccionArt no existe"});
        }
}

export const medidasProteccionArtController = new MedidasProteccionArtController();
export default medidasProteccionArtController;  