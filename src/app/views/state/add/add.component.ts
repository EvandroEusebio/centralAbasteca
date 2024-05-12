import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective  } from '@coreui/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-state-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle, RouterLink, HttpClientModule]
})
export class AddComponent {
    formData: any = {}; // Objeto para armazenar os dados do formulário

  constructor(private http: HttpClient) { }

  public submitForm(data:any): void {
    alert(JSON.stringify(data))

    this.http.post<any>('http://192.168.164.112:8000/api/state/store', data).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso:', response);
        // Faça qualquer manipulação necessária após o envio bem-sucedido
      },
      (error) => {
        console.error('Erro ao enviar dados:', error);
        // Lide com o erro adequadamente
      }
    );
  }

}
