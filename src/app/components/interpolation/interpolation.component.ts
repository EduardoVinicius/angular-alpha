import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  // Aqui será implementado o conjunto de variáveis/propriedades para vínculo com a view.
  public x: number = 10;
  public umArray: Array<number> = [10, 26, 89];
  public dataHoje: Date = new Date();
  public statusBooleano: boolean = false;

  public exibirTexto(): string {
    return 'Texto retornado a partir de uma função!';
  }

}
