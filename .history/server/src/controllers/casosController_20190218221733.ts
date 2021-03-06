import { Request, Response} from 'express';
import pool from '../database';

class CasosController{
    // Listar todos los casos

    public async list(req: Request, res:Response):Promise<void> {
        const casos = await pool.query('SELECT * FROM t_casos');
         res.json(casos);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const casos = await pool.query('SELECT * FROM t_casos WHERE caso_id = ? ', [id]);
        if(casos.length > 0){
            return res.json(casos[0]);
        }
        res.status(404).json({text:"el caso no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }
    // Crear un nuevo Caso 
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_casos set ?', [req.body]);
        res.json({message:'Creando un caso'})
    }
    //Actualizar un  Caso por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_casos set ? WHERE caso_id = ?', [req.body, id]);
          res.json({message:'El caso fue Actualizando'+ req.params.id})
      }
    // Eliminar un caso por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_casos WHERE caso_id = ?', [id]);
        res.json({message: 'El caso ha sido eliminado'})
    }
    
}

export const casosController = new CasosController();
export default casosController;  