import { Formulario } from '../models/formulario.model';

export interface LoginResponse {
  token: string;
}

export interface FormularioResponse {
  count: number;
  formularios: Formulario[];
}

export interface FormularioItem {
  formulario: Formulario;
  loading: boolean;
}