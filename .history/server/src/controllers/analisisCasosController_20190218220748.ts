import { Request, Response} from 'express';
import pool from '../database';

class AnalsisCasosController{
    // Listar todos los casos

    public async list(req: Request, res:Response):Promise<void> {
        const analisiscasos = await pool.query('SELECT * FROM t_analisis_casos');
         res.json(analisiscasos);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const analisiscasos = await pool.query('SELECT * FROM t_analisis_casos WHERE anc_id = ? ', [id]);
        if(analisiscasos.length > 0){
            return res.json(analisiscasos[0]);
        }
        res.status(404).json({text:"el analisiscasos no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }

    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_analisis_casos set ?', [req.body]);
        res.json({message:'Creando un analisis caso'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_analisis_casos set ? WHERE anc_id = ?', [req.body, id]);
          res.json({message:'El analisiscasos fue Actualizando'+ req.params.id})
      }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_analisis_casos WHERE anc_id = ?', [id]);
        res.json({message: 'El analisiscasos ha sido eliminado'})
    }
    
}

export const analisisCasosController = new AnalsisCasosController();
export default analisisCasosController;  