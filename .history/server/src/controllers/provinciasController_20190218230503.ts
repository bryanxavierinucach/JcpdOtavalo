import { Request, Response} from 'express';
import pool from '../database';
class ProvinciasController{
    // Listar todos los provincia
    public async list(req: Request, res:Response):Promise<void> {
        const provincia = await pool.query('SELECT * FROM t_provincias');
         res.json(provincia);
    }
    //Listar solo un provincia por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const provincia = await pool.query('SELECT * FROM t_provincias WHERE prov_id = ? ', [id]);
        if(provincia.length > 0){
            return res.json(provincia[0]);
        }
        res.status(404).json({text:"la provincia no existe"});
        }
    
}

export const provinciasController = new ProvinciasController();
export default provinciasController;  