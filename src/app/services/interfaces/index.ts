import { FactorEstadistico } from '../../models/factorestadistico.model';
import { FactorClima } from '../../models/factorclima.model';
import { GrupoPregunta } from '../../models/grupopregunta.model'
export interface Faces {
  estadisticos: FactorEstadistico[];
};

export interface Faccl {
  clima: FactorClima[];
};

export interface GPregus {
  preguntas: GrupoPregunta[];
}