import { Component } from '@angular/core';

@Component({
  selector: 'app-mega-salto',
  templateUrl: './mega-salto.component.html',
  styleUrls: ['./mega-salto.component.css']
})
export class MegaSaltoComponent {

    // As propriedades cujos valores serão enviados para secundario.component.ts serão criadas aqui.
    public texto: string = 'Este é o texto que será exibido na janela de alerta.';
    public outroTexto: string = 'Texto enviado do componente principal (pai) para o componente secundário (filho).';

}
