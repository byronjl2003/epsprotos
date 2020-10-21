

export class Usuario {
  constructor(
      public uid: string,
      public username: string,
      public idrol: number,
      public rol: string,
      public token: string,
      public refresh: string,

  ) {}
}