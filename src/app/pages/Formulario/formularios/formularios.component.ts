import { Component, OnInit, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import * as fromRoot from '../../../reducers/index';
import { Store, select } from '@ngrx/store';
import {openFormularioModal,closeFormularioModal, openFormularioClimaModal, closeFormularioClimaModal} from '../../../actions/ui.actions'
import { ModalinteractionService } from 'src/app/services/service.index';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { getFEs, getFCl, getGrs, clearGrs, saveForm, getFormularios, saveClimaForm } from '../../../actions/formulario.actions';
import { FactorEstadistico } from '../../../models/factorestadistico.model';
import { FactorClima } from 'src/app/models/factorclima.model';
import { GrupoPregunta } from 'src/app/models/grupopregunta.model';
import { Formulario } from '../../../models/formulario.model';
import { Pregunta } from 'src/app/models/pregunta.model';
import { TipoPregunta } from '../../../models/tipopregunta.model';
import { TipoRespuesta } from '../../../models/tiporespuesta.model';
import { Router } from '@angular/router';
import {FormularioItem} from '../../../interfaces/index'


enum states {
  CREACION,
  ADDESTADISTICOS,
  ADDCLIMA,
  CONFIGURACIONES,
  NOMBRECLIMA,
  PREGUNTASCLIMA
};
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  

  states = states;
  @ViewChild('tplTitle') private tplTitle: TemplateRef<{}>;
  @ViewChild('tplContent') private tplContent: TemplateRef<{}>;
  @ViewChild('tplFooter') private tplFooter: TemplateRef<{}>;
  
  @ViewChild('tplTitleClima') private tplTitleClima: TemplateRef<{}>;
  @ViewChild('tplContentClima') private tplContentClima: TemplateRef<{}>;
  @ViewChild('tplFooterClima') private tplFooterClima: TemplateRef<{}>;

  public titulo: string = 'FORMULARIOS';
  public subtitulo: string = 'Estos son los formularios en el sistema';
  estado: states = states.CREACION;
  

  actualform: FormGroup;
  public formForm = this.fb.group({
    nameform: ['', [Validators.required]]
  });
  public fesForm = this.fb.group({
    factores: [],
  });
  public fclForm = this.fb.group({
    factores: [],
  });
  public newfesForm = this.fb.group({
    name: ['', [Validators.required]],
    newopname: ['Nombre_opcion'],
    opciones: []
  });
  
  public formclimaname = this.fb.group({
    nameform: ['',[Validators.required]],
  })

  public formclimapreguntas = this.fb.group({
    contenido: ['',[Validators.required]],
    tipopregunta: [0,[Validators.required]],
    tiporespuesta: [0,[Validators.required]]
  })
  
  
  feslist: FactorEstadistico[] = null;
  fcllist: FactorClima[] = null;
  isLoading = false;
  gruposDescargados: { [idfactor: number]: GrupoPregunta[] };
  gruposSeleccionados: { [idfactor: number]: GrupoPregunta[] };
  formularioslistdata: FormularioItem[];
  totalformularios: number = 0;
  loadingforms: boolean = false;
  pagezise: number = 10;
  pageindex: number;
  radioValue: string = 'A';

  
  estadoclima: states = states.NOMBRECLIMA;
  newclimapregs: Pregunta[] = [];
  actualformclima: FormGroup;
  tipoPreguntaEnSistema: TipoPregunta[] = [new TipoPregunta(1, 'Multiple'), new TipoPregunta(2, 'Texto')];
  tipoRespuestaEnSistema: TipoRespuesta[] = [new TipoRespuesta(1, 'Obligatoria'), new TipoRespuesta(2, 'Opcional')];
  
  
  constructor(
    private store: Store<fromRoot.appState>,
    public _modalservice: ModalinteractionService,
    private fb: FormBuilder,
    private router: Router
  )
  {
    //this.store.pipe(select(fromRoot.selectUserToken))
    this.store.pipe(select(fromRoot.selectFEs)).subscribe(
      (data: FactorEstadistico[]) => {
        console.log(data);
        this.isLoading = false;
        this.feslist = data;
      }
    );
    this.store.pipe(select(fromRoot.selecFCls)).subscribe(
      (data: FactorClima[]) => {
        console.log(data);
        this.isLoading = false;
        this.fcllist = data;
      }
    );
    
    this.store.pipe(select(fromRoot.selecGrs)).subscribe(
      (data: { [idfactor: number]: GrupoPregunta[] }) => {
        console.log(data);
        this.gruposSeleccionados = data;
      }
    );

    this.store.pipe(select(fromRoot.selecFormularios)).subscribe(
      (data: FormularioItem[]) => { this.formularioslistdata = data; }
    );

    this.store.pipe(select(fromRoot.selecTotalFormularios)).subscribe(
      (data: number) => { this.totalformularios = data; }
    );

    this.store.pipe(select(fromRoot.selectLoadingFormularios)).subscribe(
      (data: boolean) => this.loadingforms = data
    );

}

  ngOnInit()
  {
    this.store.dispatch(getFormularios({ limit: 10, offset: 0 }));
    this.pageindex = 1;
  }
  
  getFactorName(idfac: number): FactorClima {
    //console.log("---->>");
    //console.log(this.fcllist);
    //console.log(idfac);
    return this.fcllist.find(item => {
      //console.log(typeof item.idfactor, typeof idfac);

      return item.idfactor == idfac;
     });
  }

  showDialog(): void {
    //console.log("showDialog");
    //this.store.dispatch(saludarConStore());
    this.reseteoDeVariables();
    this._modalservice.changeUIState([this.tplTitle, this.tplContent, this.tplFooter]);
    this.store.dispatch(openFormularioModal());
    this.actualform = this.formForm;
  }

  showNewClimaDialog(): void {
    this._modalservice.changeUIClimaState([this.tplTitleClima, this.tplContentClima, this.tplFooterClima]);
    this.store.dispatch(openFormularioClimaModal());
    this.actualformclima = this.formclimaname;
  }

  

  save(): void {
    this.estado = states.CREACION;
    console.log('SaveForm');
    this.store.dispatch(saveForm({ name: this.formForm.value.nameform, faces: this.feslist }));
    //this.store.dispatch(closeFormularioModal());
  }
  
  closeform(): void {
    this.store.dispatch(closeFormularioModal());
    this.feslist = [];
   }
  siguiente(): void {
    switch (this.estado) {
      
      case states.CREACION: {
        this.estado = states.ADDESTADISTICOS;
        this.actualform = this.fesForm;
        break;
      }
      case states.ADDESTADISTICOS: {
        this.estado = states.ADDCLIMA;
        this.actualform = this.fclForm;
        break;
      }
      case states.ADDCLIMA: {
        this.estado = states.CONFIGURACIONES;
        break;
      }  
      default:
        break;
    }
  }
  getfes(): void {
    
    if (this.feslist.length == 0) {
      //console.log("...getfez....");
      this.isLoading = true;
      this.store.dispatch(getFEs());
    }
    
  }
  getfcl(): void {
    
    if (this.fcllist.length == 0) {
      ///console.log("...getfez....");
      this.isLoading = true;
      this.store.dispatch(getFCl());
    }
    
  }
  selectChange(info: any[]): void {
    console.log('Se detecto un cambio');
    console.log(info);
    console.log(this.fesForm.value.factores);
  }
  selectChange2(info: any[]): void {
    console.log('Se detecto un cambio en los factores seleccionados');
    console.log(info);
    this.store.dispatch(clearGrs());
    this.fclForm.value.factores.forEach((element: FactorClima) => {
      this.store.dispatch(getGrs({ idfac: element.idfactor }));
    });
  }
  anterior(): void {
    switch (this.estado) {
      
      case states.ADDESTADISTICOS: {
        this.estado = states.CREACION;
        this.actualform = this.formForm;
        break;
      }
      case states.ADDCLIMA: {
        this.estado = states.ADDESTADISTICOS;
        this.actualform = this.fesForm;
        break;
      }    
      default:
        break;
    }
  }
  onQueryParamsChange(e: any) {
    console.log("onQueryParamsChange")
    console.log(e);
    this.pageindex = e.pageIndex;
    this.store.dispatch(getFormularios({ limit: this.pagezise , offset: (this.pageindex - 1) * this.pagezise }));

  }
  onPageIndexChange(num: number) {
    console.log("Cambio de pagina a ", num);
  }

  
  showVistaPrevia(): void {
    localStorage.setItem('previa', 'LALALALALA');
    /* const url = this.router.serializeUrl(
      
    ); */
    const url = this.router.createUrlTree([''], { fragment: 'survey' });
    window.open(url.toString(), '_blank');
  }


  //METODOS PARA EL MODAL DE NEW FACTOR CLIMA...
  closeformclima(): void{
    this.store.dispatch(closeFormularioClimaModal());
  }
  
  anteriorclima(): void {
    switch (this.estadoclima) {
      case states.PREGUNTASCLIMA: {
        this.estadoclima = states.NOMBRECLIMA;
        this.actualformclima = this.formclimaname;
        break;
      }
      default:
      break;
    }
  }

  siguienteclima(): void {
    switch (this.estadoclima) {
      case states.NOMBRECLIMA: {
        this.estadoclima = states.PREGUNTASCLIMA;
        this.actualformclima = this.formclimapreguntas;
        break;
      }
      default:
        break;
    }
   }

  addpregunta(): void {
    //AGREGO UNA NUEVA PREGUNTA A LA LISTA DE PREGUNTAS A AGREGAR
    console.log(this.formclimapreguntas.value.tipopregunta);
    console.log(this.formclimapreguntas.value.tiporespuesta);
    console.log(this.formclimapreguntas.value.contenido);
    this.newclimapregs.push(
      new Pregunta(
        -1,
        this.tipoPreguntaEnSistema[this.formclimapreguntas.value.tipopregunta],
        this.tipoRespuestaEnSistema[this.formclimapreguntas.value.tiporespuesta],
        this.formclimapreguntas.value.contenido
      )
    );
    //LIMPIO EL CAMPO DEL CONTENIDO
    console.log(this.newclimapregs);
    this.formclimapreguntas.reset();
  }
  saveclima(): void{
    this.estadoclima = states.NOMBRECLIMA;
    const facclima: FactorClima = new FactorClima(-1, this.formclimaname.value.nameform, 1);
    
    var grup: GrupoPregunta = new GrupoPregunta(-1, '_DEFAULT_', facclima, this.newclimapregs, this.newclimapregs.length);
    this.store.dispatch(saveClimaForm({ grupo: grup }));

  }

  removenewpreg(i: number): void { 
    console.log('remove', i);
    this.newclimapregs.splice(i, 1);
  }


  reseteoDeVariables(): void {
    //this.feslist = [];
    //this.fcllist = [];
    this.newclimapregs = [];
    this.formForm.reset();
    this.fclForm.reset();
    this.fesForm.reset();
    this.formclimaname.reset();
    this.formclimapreguntas.reset();
    this.actualform = this.formForm;
    this.actualformclima = this.formclimaname;
    this.estado = states.CREACION;
    
    
  
  }


}
