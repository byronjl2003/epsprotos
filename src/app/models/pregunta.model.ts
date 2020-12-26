import { TipoPregunta } from './tipopregunta.model';
import { TipoRespuesta } from './tiporespuesta.model';

export class Pregunta {
  idpregunta: number;
  tipopregunta: TipoPregunta;
  tiporespuesta: TipoRespuesta;
  contenido: string;
  constructor(
      idpregunta: number,
      tipopregunta: TipoPregunta,
      tiporespuesta: TipoRespuesta,
      contenido: string

  )
  {
    this.idpregunta = idpregunta;
    this.tipopregunta = tipopregunta;
    this.tiporespuesta = tiporespuesta;
    this.contenido = contenido;
   }
}