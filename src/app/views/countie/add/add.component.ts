import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective  } from '@coreui/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgFor} from '@angular/common';


/*
<div class="mb-3">
    <select aria-label="Default select example" cSelect>
      <option>Seleciona a Provícia</option>
      <option value="1">Luanda</option>
      <option value="2">Benguela</option>
      <option value="3">Huambo</option>
    </select>
  </div>
*/

@Component({
    selector: 'app-countie-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle, RouterLink, HttpClientModule, NgFor]
})
export class AddComponent  implements OnInit { 

  public data: any;

    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.fetchDetails(); 
    }

    public submitForm(data:any): void {
  
      this.http.post<any>('http://65.109.224.144:8000/api/countie/store', data).subscribe(
        (response) => {
          alert(`Dados enviados com sucesso:, ${JSON.stringify(response)}`)
          console.log('Dados enviados com sucesso:', response);
        },
        (error) => {
          console.error('Erro ao enviar dados:', error);
          // Lide com o erro adequadamente
          alert(`Erro ao enviar dados:, ${JSON.stringify(error.message)}`)
        }
      );
    }
  
    public fetchDetails(): void {
      this.http.get('http://65.109.224.144:8000/api/state/all').subscribe(
        (response) => {
          this.data = response; // Atribui os dados recebidos à propriedade 'data'
          console.log(response)
        },
        (error) => {
          console.error('Erro ao buscar detalhes:', error);
          alert(`Erro ao buscar detalhes:, ${JSON.stringify(error.message)}`)
        }
      );
    }

}
