import { FEOpcion } from './feopcion.model';

export class FactorEstadistico {
  idfactor: number;
  nombre: string;
  numopciones: number;
  opciones: FEOpcion[];
  constructor(
      idfactor: number,
      nombre: string,
      numopciones: number,
      opciones: FEOpcion[]
  )
  {
    this.idfactor = idfactor;
    this.nombre = nombre;
    this.numopciones = numopciones;
    this.opciones = opciones;
  }
}