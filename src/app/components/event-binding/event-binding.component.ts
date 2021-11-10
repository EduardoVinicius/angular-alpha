import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  // Criar a função para ser vinculada via event binding a partir da view.
  public exibirAlerta(): void {
    console.log('Evento disparado...')
    alert('Evento disparado...')
  }

}
