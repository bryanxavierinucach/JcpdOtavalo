import { Request, Response} from 'express';
import pool from '../database';

class GeneroController{
    // Listar todos los genero

    public async list(req: Request, res:Response):Promise<void> {
        const genero = await pool.query('SELECT * FROM t_genero');
         res.json(genero);
    }
    //Listar solo un genero por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const genero = await pool.query('SELECT * FROM t_genero WHERE gene_id = ? ', [id]);
        if(genero.length > 0){
            return res.json(genero[0]);
        }
        res.status(404).json({text:"el genero no existe"});
        }
    
}

export const generoController = new GeneroController();
export default generoController;  