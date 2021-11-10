import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent {
  // Elementos para serem de uso do Input property
  @Input() public mensagem: string = '';
  @Input('alerta') public outraMensagem: string = '';

  public exibirMensagemAlerta(): void {
    alert(this.outraMensagem)
  }
}
