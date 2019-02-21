"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json([
            { text: 'API de USUARIOS esta en /api/users' },
            { text: 'API de CASOS esta en /api/casos' },
            { text: 'API de PROCESAMIENTO DE CONOCIMIENTO esta en /api/proco' },
            { text: 'API ANALISIS DE CASOS es en /api/anc' },
            { text: 'API AUDIENCIAS es en /api/audiencias' },
            { text: 'API AUDIENCIAS PRUEBA es en /api/audiprubas' },
            { text: 'API AUDITORIAS es en /api/auditorias' },
            { text: 'API AVOCATORIAS es en /api/avocatorias' },
            { text: 'API CANTONES es en /api/cantones' },
            { text: 'API DATOS AFECTADO es en /api/datosAfectado' },
            { text: 'API DATOS DENUNCIADO es en /api/datosDenunciado' },
            { text: 'API DATO DENUNCIANTE es en /api/datosDenunciante' },
            { text: 'API DATOS AFECTADO es en /api/datosAfectado' },
            { text: 'API AMENAZADO VIOLENTADO es en /api/amenazadoViolentado' },
            { text: 'API DISCAPACIDAD es en /api/discapacidad' },
            { text: 'API ESTADOS es en /api/estados' },
            { text: 'API GENERO es en /api/genero' },
            { text: 'API IDENTIDAD es en /api/identidad' },
            { text: 'API MEDIDAS EMERGENTES es en /api/medidasEmergentes' },
            { text: 'API MEDIDAS DE PROTECCION es en /api/medidasProteccionArt' },
            { text: 'API MENU es en /api/menu' },
            { text: 'API PARROQUIAS es en /api/parroquias' },
            { text: 'API PROVINCIAS es en /api/provincias' },
            { text: 'API RESOLUCION es en /api/resolucion' },
            { text: 'API REVICION AUDIENCIAS PRUEBA es en /api/revisionAudienciaPrueba' },
            { text: 'API ROLES es en /api/roles' },
            { text: 'API SECTORES es en /api/sectores' },
            { text: 'API TIPO CASOS es en /api/tipoCasos' },
            { text: 'API TIPO DENUNCIA es en /api/tipoDenuncia' },
            { text: 'API TIPO MENU es en /api/tipoMenu' },
            { text: 'API TIPO PARROQUIA es en /api/tipoParroquia' },
            { text: 'API TIPO PERSONA es en /api/tipoPersona' },
            { text: 'API TIPO DERECHOS es en /api/tiposDerechos' },
            { text: 'API TIPO MEDIDAS es en /api/tiposMedidas' },
            { text: 'API TIPO DERECHO AMENAZAS es en /api/tipoDerechoAmenazas' }
        ]);
    }
}
exports.indexController = new IndexController();
