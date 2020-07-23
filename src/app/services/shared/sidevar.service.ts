import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SidevarService {
  menu: any = [
    {
      titulo: "Administracion",
      icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Usuarios", url: "/usuarios" },
        { titulo: "Unidades", url: "/unidades" },
        { titulo: "Rangos", url: "/rangos" },
        { titulo: "Escalas", url: "/escalas" },
      ],
    },
    {
      titulo: "Formularios",
      icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Formularios", url: "/formularios" },
        { titulo: "Factores estadisticos", url: "/factores_estadisticos" },
        { titulo: "Factores clima", url: "/factores_clima" },
      ],
    },
    {
      titulo: "Encuestas",
      icono: "mdi mdi-gauge",
      submenu: [{ titulo: "Encuestas", url: "/encuestas" }],
    },
    {
      titulo: "Analisis de datos",
      icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Resumen", url: "/resumen" },
        { titulo: "Mi clima", url: "/miclima" },
        { titulo: "Consolidados", url: "/consolidados" },
        { titulo: "Correlaciones", url: "/correlaciones" },
      ],
    },
    {
      titulo: "LimeSurvey",
      icono: "mdi mdi-gauge",
      submenu: [],
    },
    {
      titulo: "Configuraciones",
      icono: "mdi mdi-gauge",
      submenu: [],
    },
  ];

  constructor() {}
}
