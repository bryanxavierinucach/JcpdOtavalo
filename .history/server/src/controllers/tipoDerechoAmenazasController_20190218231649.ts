import { Request, Response} from 'express';
import pool from '../database';
class TipoDerechoAmenazasController{
    // Listar todos los tipoDerechoAmenazas
    public async list(req: Request, res:Response):Promise<void> {
        const tipoDerechoAmenazas = await pool.query('SELECT * FROM tipo_derecho_amenazas');
         res.json(tipoDerechoAmenazas);
    }
    //Listar solo un tipoDerechoAmenazas por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const tipoDerechoAmenazas = await pool.query('SELECT * FROM tipo_derecho_amenazas WHERE tda_id = ? ', [id]);
        if(tipoDerechoAmenazas.length > 0){
            return res.json(tipoDerechoAmenazas[0]);
        }
        res.status(404).json({text:"la tipoDerechoAmenazas no existe"});
        }
    
}

export const tipoDerechoAmenazasController = new TipoDerechoAmenazasController();
export default tipoDerechoAmenazasController;  