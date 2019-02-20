import { Request, Response} from 'express';
import pool from '../database';
class AmanezadoVilentadoController{
    // Listar todos los casos

    public async list(req: Request, res:Response):Promise<void> {
        const amenazadoViolentado = await pool.query('SELECT * FROM t_derecho_amenazado_violentado');
         res.json(amenazadoViolentado);
    }
    //Listar solo un afectado por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const amenazadoViolentado = await pool.query('SELECT * FROM t_derecho_amenazado_violentado WHERE dav_id = ? ', [id]);
        if(amenazadoViolentado.length > 0){
            return res.json(amenazadoViolentado[0]);
        }
        res.status(404).json({text:"el amenazadoViolentado no existe"});
        
        //res.json({text:'listando un caso'+ req.params.id});
    }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_derecho_amenazado_violentado set ?', [req.body]);
        res.json({message:'Creando un amenazadoViolentado'})
    }
    public update(req:Request, res:Response){
        const {id} = req.params;
        pool.query('UPDATE t_derecho_amenazado_violentado set ? WHERE dav_id ?', [req.body, id])
        res.json({message:'El amenazadoViolentado fue Actualizando'+ req.params.id})
    }
}

export const amanezadoVilentadoController = new AmanezadoVilentadoController();
export default amanezadoVilentadoController;  



