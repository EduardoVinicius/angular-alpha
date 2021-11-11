import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  // Criando o "anunciador" do evento que enviará um conjunto de dados
  // do componente filho para o componente pai.
  @Output() anunciador = new EventEmitter<any>();

  // Criando a propriedade que receberá o conjunto de dados:
  public objetoDados: any = [];

  // Criando a função para - junto com o anunciador - enviar os dados:
  public enviarDados(): void {
    this.anunciador.emit(this.objetoDados);
  }
}
