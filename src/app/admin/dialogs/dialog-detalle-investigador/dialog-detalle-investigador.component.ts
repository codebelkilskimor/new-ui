import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../interfaces/investigadores';
import { Proyectos } from '../../interfaces/proyectoIndividual';


@Component({
  selector: 'app-dialog-detalle-investigador',
  templateUrl: './dialog-detalle-investigador.component.html',
  styleUrls: ['./dialog-detalle-investigador.component.scss']
})
export class DialogDetalleInvestigadorComponent implements OnInit {

  investigador: Usuario = {} as Usuario // usuarios donde se ecuentra la información
  facultadesSinRepetir: any[] = []
  programasSinRepetir: any[] = []
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.investigador = this.modifyRespuestaFacultades(this.data.investigador[0])
  }

  modifyRespuestaFacultades(arrModificar: Usuario) {
    Object.keys(arrModificar).forEach(val => {
      if (val === 'participaciones') {
        const valHand = arrModificar.participaciones
        Object.keys(valHand).forEach((value, index) => {
          const clases = valHand[index].clases
          let facultades = clases.map(item => { return item.materium.programa.facultad.nombre } );
          let programas = clases.map(item => { return item.materium.programa.nombre } );
          facultades.some((item, idx) => {
            const existeFacultad = this.facultadesSinRepetir.find(x => x === item)
            if (!existeFacultad) {
              this.facultadesSinRepetir.push(item)
            }
          });
          programas.some((item, idx) => {
            const existeFacultad = this.programasSinRepetir.find(x => x === item)
            if (!existeFacultad) {
              this.programasSinRepetir.push(item)
            }
          });
          valHand[index].facultades = this.facultadesSinRepetir
          valHand[index].programas = this.programasSinRepetir
          this.facultadesSinRepetir = []
          this.programasSinRepetir = []
        })
      }
    })
    return arrModificar
  }
}