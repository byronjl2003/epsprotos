import { RouterModule, Routes } from "@angular/router";

import { LoginGuardGuard } from "../services/service.index";

import { AccoutSettingsComponent } from "./accout-settings/accout-settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { UsuariosComponent } from "./Administracion/usuarios/usuarios.component";
import { UnidadesComponent } from "./Administracion/unidades/unidades.component";
import { RangosComponent } from "./Administracion/rangos/rangos.component";
import { EscalasComponent } from "./Administracion/escalas/escalas.component";
import { FormulariosComponent } from "./Formulario/formularios/formularios.component";
import { FactoresEstadisticosComponent } from "./Formulario/factores-estadisticos/factores-estadisticos.component";
import { FactoresClimaComponent } from "./Formulario/factores-clima/factores-clima.component";
import { EncuestasComponent } from "./Encuesta/encuestas/encuestas.component";
import { ResumenComponent } from "./Analisis/resumen/resumen.component";
import { MiClimaComponent } from "./Analisis/mi-clima/mi-clima.component";
import { ConsolidadosComponent } from "./Analisis/consolidados/consolidados.component";
import { CorrelacionesComponent } from "./Analisis/correlaciones/correlaciones.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: "usuarios",
        component: UsuariosComponent,
        data: { titulo: "Usuarios" },
      },
      {
        path: "unidades",
        component: UnidadesComponent,
        data: { titulo: "Unidades" },
      },
      {
        path: "rangos",
        component: RangosComponent,
        data: { titulo: "Rangos" },
      },
      {
        path: "escalas",
        component: EscalasComponent,
        data: { titulo: "Escalas" },
      },
      {
        path: "formularios",
        component: FormulariosComponent,
        data: { titulo: "Formularios" },
      },
      {
        path: "factores_estadisticos",
        component: FactoresEstadisticosComponent,
        data: { titulo: "Factores Estadisticos" },
      },
      {
        path: "factores_clima",
        component: FactoresClimaComponent,
        data: { titulo: "Factores Clima" },
      },
      {
        path: "encuestas",
        component: EncuestasComponent,
        data: { titulo: "Encuestas" },
      },
      {
        path: "resumen",
        component: ResumenComponent,
        data: { titulo: "Resumen" },
      },
      {
        path: "miclima",
        component: MiClimaComponent,
        data: { titulo: "MiClima" },
      },
      {
        path: "consolidados",
        component: ConsolidadosComponent,
        data: { titulo: "Consolidados" },
      },
      {
        path: "correlaciones",
        component: CorrelacionesComponent,
        data: { titulo: "Correlaciones" },
      },
      { path: "", redirectTo: "/unidades", pathMatch: "full" },
    ],
  },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
