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
            {text: 'API es in /api/datosAfectado'},
            {text: 'API es in /api/datosDenunciado'},
            {text: 'API es in /api/datosDenunciante'},
            {text: 'API es in /api/datosAfectado'},
            {text: 'API es in /api/amenazadoViolentado'},
            {text: 'API es in /api/discapacidad'},
            {text: 'API es in /api/estados'},
            {text: 'API es in /api/genero'},
            {text: 'API es in /api/identidad'},
            {text: 'API es in /api/medidasEmergentes'},
            {text: 'API es in /api/medidasProteccionArt'},
            {text: 'API es in /api/menu'},
            {text: 'API es in /api/parroquias'},
            {text: 'API es in /api/provincias'},
            {text: 'API es in /api/resolucion'},
            {text: 'API es in /api/revisionAudienciaPrueba'},
            {text: 'API es in /api/roles'},
            {text: 'API es in /api/sectores'},
            {text: 'API es in /api/tipoCasos'},
            {text: 'API es in /api/tipoDenuncia'},
            {text: 'API es in /api/tipoMenu'},
            {text: 'API es in /api/tipoParroquia'},
            {text: 'API es in /api/tipoPersona'},
            {text: 'API es in /api/tiposDerechos'},
            {text: 'API es in /api/tiposMedidas'},
            {text: 'API es in /api/tipoDerechoAmenazas'}
        ])
    }
}

export const indexController = new IndexController();