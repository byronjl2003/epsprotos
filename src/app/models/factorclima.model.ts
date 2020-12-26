export class FactorClima {
  idfactor: number;
  nombre: string;
  grupos: number;
  constructor(
      idfactor: number,
      nombre: string,
      grupos: number
  )
  {
    this.grupos = grupos;
    this.idfactor = idfactor;
    this.nombre = nombre;
   }
}