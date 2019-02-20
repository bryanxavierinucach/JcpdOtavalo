import { Request, Response} from 'express';
import pool from '../database';
class MenuController{
    // Listar todos los menu
    public async list(req: Request, res:Response):Promise<void> {
        const menu = await pool.query('SELECT * FROM t_menu');
         res.json(menu);
    }
    //Listar solo un menu por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const menu = await pool.query('SELECT * FROM t_menu WHERE m_id = ? ', [id]);
        if(menu.length > 0){
            return res.json(menu[0]);
        }
        res.status(404).json({text:"la menu no existe"});
        }
    //Crear una menu
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_menu set ?', [req.body]);
        res.json({message:'Creando una menu'})
    }
    //Actualizar una menu por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_menu set ? WHERE m_id = ?', [req.body, id]);
          res.json({message:'La menu fue Actualizando'+ req.params.id})
      }
    // Eliminar una menu por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_menu WHERE m_id = ?', [id]);
        res.json({message: 'La menu ha sido eliminado'})
    }
    
}

export const menuController = new MenuController();
export default menuController;  