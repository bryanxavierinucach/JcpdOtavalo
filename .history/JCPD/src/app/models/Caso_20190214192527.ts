import { RequiredValidator } from '@angular/forms';

export interface Caso {
    caso_id?: {type: number, RequiredValidator: true};
    proco_id?: number;
    tda_id?: number;
    dav_id?: number;
    tdenun_id?: number;
    caso_numcaso?: string;
    caso_motivo?: string;
    caso_observaciones?: string;
    caso_fechareg?: Date;
    caso_fechaingreso?: Date;
}
