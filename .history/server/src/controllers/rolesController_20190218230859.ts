import { Request, Response} from 'express';
import pool from '../database';
class RolesController{
    // Listar todos los roles
    public async list(req: Request, res:Response):Promise<void> {
        const roles = await pool.query('SELECT * FROM t_roles');
         res.json(roles);
    }
    //Listar solo un roles por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const roles = await pool.query('SELECT * FROM t_roles WHERE r_id = ? ', [id]);
        if(roles.length > 0){
            return res.json(roles[0]);
        }
        res.status(404).json({text:"la roles no existe"});
        }
    //Crear una roles
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_roles set ?', [req.body]);
        res.json({message:'Creando una roles'})
    }
    //Actualizar una roles por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_roles set ? WHERE r_id = ?', [req.body, id]);
          res.json({message:'La roles fue Actualizando'+ req.params.id})
      }
    // Eliminar una roles por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_roles WHERE r_id = ?', [id]);
        res.json({message: 'La roles ha sido eliminado'})
    }
    
}

export const rolesController = new RolesController();
export default rolesController;  