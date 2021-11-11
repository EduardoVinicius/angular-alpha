import { Component } from '@angular/core';

@Component({
  selector: 'app-mega-salto',
  templateUrl: './mega-salto.component.html',
  styleUrls: ['./mega-salto.component.css']
})
export class MegaSaltoComponent {
  // Criando a função de exibição de dados no componente pai.
  public exibirDados(dados:any) {
    let receptora: string = 'Obrigado por se cadastrar, ' + dados.nome + '!\n';
    receptora += 'O email ' + dados.email + ' foi cadastrado com sucesso.';

    alert(receptora);
  }


  /*
    // As propriedades cujos valores serão enviados para secundario.component.ts serão criadas aqui.
    public texto: string = 'Este é o texto que será exibido na janela de alerta.';
    public outroTexto: string = 'Texto enviado do componente principal (pai) para o componente secundário (filho).';
  */
}
