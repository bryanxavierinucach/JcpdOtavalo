import { Request, Response} from 'express';

class IndexController{
    public index(req: Request, res:Response) {
        res.json([
            
            
            
            
            {text: 'API de casos esta en /api/users'},
            {text: 'API es en /api/casos'},
            {text: 'API es en /api/proco'},
            {text: 'API analisis casos audiencias es en /api/anc'},
            {text: 'API es en /api/audiencias'},
            {text: 'API audiencia de pruebas es en /api/audiprubas'},
            {text: 'API es en /api/auditorias'},
            {text: 'API es en /api/avocatorias'},
            {text: 'API es en /api/cantones'},
            {text: 'API es en /api/datosAfectado'},
            {text: 'API es en /api/datosDenunciado'},
            {text: 'API es en /api/datosDenunciante'},
            {text: 'API es en /api/datosAfectado'},
            {text: 'API es en /api/amenazadoViolentado'},
            {text: 'API es en /api/discapacidad'},
            {text: 'API es en /api/estados'},
            {text: 'API es en /api/genero'},
            {text: 'API es en /api/identidad'},
            {text: 'API es en /api/medidasEmergentes'},
            {text: 'API es en /api/medidasProteccionArt'},
            {text: 'API es en /api/menu'},
            {text: 'API es en /api/parroquias'},
            {text: 'API es en /api/provencias'},
            {text: 'API es en /api/resolucion'},
            {text: 'API es en /api/revisionAudienciaPrueba'},
            {text: 'API es en /api/roles'},
            {text: 'API es en /api/sectores'},
            {text: 'API es en /api/tipoCasos'},
            {text: 'API es en /api/tipoDenuncia'},
            {text: 'API es en /api/tipoMenu'},
            {text: 'API es en /api/tipoParroquia'},
            {text: 'API es en /api/tipoPersona'},
            {text: 'API es en /api/tiposDerechos'},
            {text: 'API es en /api/tiposMedidas'},
            {text: 'API es en /api/tipoDerechoAmenazas'}
        ])
    }
}

export const indexController = new IndexController();