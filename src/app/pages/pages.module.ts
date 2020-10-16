import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {ChartsModule} from 'ng2-charts';

/* import {GraficoDonaComponent} from
'../components/grafico-dona/grafico-dona.component';
import {IncrementadorComponent} from
'../components/incrementador/incrementador.component'; */
import {PlusbtnComponent} from '../components/plusbtn/plusbtn.component';
import {PipesModule} from '../pipes/pipes.module';
import {SharedModule} from '../shared/shared.module';

import {AccoutSettingsComponent} from './accout-settings/accout-settings.component';
import {EscalasComponent} from './Administracion/escalas/escalas.component';
import {RangosComponent} from './Administracion/rangos/rangos.component';
import {UnidadesComponent} from './Administracion/unidades/unidades.component';
import {UsuariosComponent} from './Administracion/usuarios/usuarios.component';
import {ConsolidadosComponent} from './Analisis/consolidados/consolidados.component';
import {CorrelacionesComponent} from './Analisis/correlaciones/correlaciones.component';
import {MiClimaComponent} from './Analisis/mi-clima/mi-clima.component';
import {ResumenComponent} from './Analisis/resumen/resumen.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EncuestasComponent} from './Encuesta/encuestas/encuestas.component';
import {FactoresClimaComponent} from './Formulario/factores-clima/factores-clima.component';
import {FactoresEstadisticosComponent} from './Formulario/factores-estadisticos/factores-estadisticos.component';
import {FormulariosComponent} from './Formulario/formularios/formularios.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {PAGES_ROUTES} from './pages.routes';
import {ProgressComponent} from './progress/progress.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    // IncrementadorComponent,
    // GraficoDonaComponent,
    PlusbtnComponent,
    AccoutSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    UsuariosComponent,
    UnidadesComponent,
    RangosComponent,
    EscalasComponent,
    FactoresEstadisticosComponent,
    FactoresClimaComponent,
    FormulariosComponent,
    EncuestasComponent,
    ResumenComponent,
    MiClimaComponent,
    ConsolidadosComponent,
    CorrelacionesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule,
    CommonModule,

  ],
})
export class PagesModule {
}
