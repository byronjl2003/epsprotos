

export class Usuario {
  constructor(
      public username: string,
      public idrol: number,
      public rol: string,
      public token: string,
      public refresh: string,

  ) {}
}