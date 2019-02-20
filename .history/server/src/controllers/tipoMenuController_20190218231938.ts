import { Request, Response} from 'express';
import pool from '../database';
class TipoMenuController{
    // Listar todos los tipoMenu
    public async list(req: Request, res:Response):Promise<void> {
        const tipoMenu = await pool.query('SELECT * FROM t_tipo_menu');
         res.json(tipoMenu);
    }
    //Listar solo un tipoMenu por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const tipoMenu = await pool.query('SELECT * FROM t_tipo_menu WHERE tm_id = ? ', [id]);
        if(tipoMenu.length > 0){
            return res.json(tipoMenu[0]);
        }
        res.status(404).json({text:"la tipoMenu no existe"});
        }
}

export const tipoMenuController = new TipoMenuController();
export default tipoMenuController;  