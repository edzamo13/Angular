import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public listaEntradas: Entrada[];

  constructor() {
    this.listaEntradas = [
      {
        titulo: 'Introducción a Angular',
        resumen:
          'En esta lección realizaremos una pequeña introducción al mundo de desarrollo con Angular',
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen:
          'Breve recorrido por el lenguaje de Typescript como base para desarrollar en Angular',
      },
      {
        titulo: 'Componentes en Angular',
        resumen:
          'Aprenderemos a usar los componentes en Angular y el porqué de su importancia',
      },
    ];
  }

  ngOnInit(): void {}

  mostrarTitulo(titulo: string) {
    alert(`Entrada seleccionada: ${titulo}.`);
  }
}
