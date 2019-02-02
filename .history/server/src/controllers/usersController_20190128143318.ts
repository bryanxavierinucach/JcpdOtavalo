import { Request, Response} from 'express';
import pool from '../database';

class UsersController{
    // Listar todos los casos

    public async list(req: Request, res:Response):Promise<void> {
        const users = await pool.query('SELECT * FROM t_usuarios');
         res.json(users);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const users = await pool.query('SELECT * FROM t_usuarios WHERE usu_id = ? ', [id]);
        if(users.length > 0){
            return res.json(users[0]);
        }
        res.status(404).json({text:"el usuario no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_usuarios set ?', [req.body]);
        res.json({message:'Creando un usuario'})
    }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_casos WHERE caso_id = ?', [id]);
        res.json({message: 'El juego ha sido eliminado'})
    }
    public update(req:Request, res:Response){
        const {id} = req.params;
        pool.query('UPDATE t_casos set ? WHERE caso_id ?', [req.body, id])
        res.json({message:'El caso fue Actualizando'+ req.params.id})
    }
}

export const casosController = new CasosController();
export default casosController;  