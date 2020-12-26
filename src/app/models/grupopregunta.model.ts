import { FactorClima } from './factorclima.model';
import { Pregunta } from './pregunta.model';

export class GrupoPregunta {

  idgrupo: number;
  nombre: string;
  factorclima: FactorClima;
  preguntas: Pregunta[];
  numpreguntas: number;
  constructor(
      idgrupo: number,
      nombre: string,
      factorclima: FactorClima,
    preguntas: Pregunta[],
      numpreguntas: number
  )
  {
    this.idgrupo = idgrupo;
    this.nombre = nombre;
    this.factorclima = factorclima;
    this.preguntas = preguntas;
    this.numpreguntas = numpreguntas;

   }
}