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
        res.status(404).json({text:"el juego no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }

    // Listar un procesamiento de conocimiento
    public async getOnePro(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const proco = await pool.query('SELECT proco_id, proco_nombre FROM t_procesamiento_conocimiento WHERE proco_id = ? ', [id]);
        if(proco.length > 0){
            return res.json(proco[0]);
        }
        res.status(404).json({text:"el procesamiento no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }
    public async listproco(req: Request, res:Response) {
        const proco = await pool.query('SELECT * FROM t_procesamiento_conocimiento');
         res.json(proco);
    }


    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_casos set ?', [req.body]);
        res.json({message:'Creando un caso'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_casos set ? WHERE caso_id = ?', [req.body, id]);
          res.json({message:'El caso fue Actualizando'+ req.params.id})
      }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_casos WHERE caso_id = ?', [id]);
        res.json({message: 'El juego ha sido eliminado'})
    }
    
}

export const casosController = new CasosController();
export default casosController;  