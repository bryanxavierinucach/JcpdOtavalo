import { Request, Response} from 'express';

class IndexController{
    public index(req: Request, res:Response) {
        res.json([
            
            
            
            
            {text: 'API es in /api/users'},
            {text: 'API es in /api/casos'},
            {text: 'API es in /api/proco'},
            {text: 'API analisis casos audiencias es in /api/anc'},
            {text: 'API es in /api/audiencias'},
            {text: 'API audiencia de pruebas es in /api/audiprubas'},
            {text: 'API es in /api/auditorias'},
            {text: 'API es in /api/avocatorias'},
            {text: 'API es in /api/cantones'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'},
            {text: 'API es in /api/proco'}

        ])
      

    }
}

export const indexController = new IndexController();