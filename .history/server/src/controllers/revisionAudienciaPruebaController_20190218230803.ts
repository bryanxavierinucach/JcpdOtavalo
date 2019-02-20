import { Request, Response} from 'express';
import pool from '../database';
class RevisionAudienciaPruebaController{
    // Listar todos los revisionAudienciaPrueba
    public async list(req: Request, res:Response):Promise<void> {
        const revisionAudienciaPrueba = await pool.query('SELECT * FROM t_revision_audiencia_prueba');
         res.json(revisionAudienciaPrueba);
    }
    //Listar solo un revisionAudienciaPrueba por el ID
    public async getOne(req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const revisionAudienciaPrueba = await pool.query('SELECT * FROM t_revision_audiencia_prueba WHERE raup_id = ? ', [id]);
        if(revisionAudienciaPrueba.length > 0){
            return res.json(revisionAudienciaPrueba[0]);
        }
        res.status(404).json({text:"la revisionAudienciaPrueba no existe"});
        }
    //Crear una revisionAudienciaPrueba
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO t_revision_audiencia_prueba set ?', [req.body]);
        res.json({message:'Creando una revisionAudienciaPrueba'})
    }
    //Actualizar una revisionAudienciaPrueba por el ID
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
         await pool.query('UPDATE t_revision_audiencia_prueba set ? WHERE raup_id = ?', [req.body, id]);
          res.json({message:'La revisionAudienciaPrueba fue Actualizando'+ req.params.id})
      }
    // Eliminar una revisionAudienciaPrueba por el ID
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}= req.params;
       await pool.query('DELETE FROM t_revision_audiencia_prueba WHERE raup_id = ?', [id]);
        res.json({message: 'La revisionAudienciaPrueba ha sido eliminado'})
    }
    
}

export const revisionAudienciaPruebaController = new RevisionAudienciaPruebaController();
export default revisionAudienciaPruebaController;  