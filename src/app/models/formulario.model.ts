import { FactorEstadistico } from './factorestadistico.model';
import { GrupoPregunta } from './grupopregunta.model';

export class Formulario {
  idformulario: number;
  name: string;
  usado: string;
  numestadisticos: number;
  numgrupos: number;
  factores: FactorEstadistico[];
  grupos: GrupoPregunta[];
  constructor(
      idformulario: number,
      name: string,
      usado: string,
      numestadisticos: number,
      numgrupos: number,
      factores: FactorEstadistico[],
      grupos: GrupoPregunta[],
  )
  {

    this.idformulario = idformulario;
    this.name = name;
    this.usado = usado;
    this.numestadisticos = numestadisticos;
    this.numgrupos = numgrupos;
    this.factores = factores;
    this.grupos = grupos;

  }
}