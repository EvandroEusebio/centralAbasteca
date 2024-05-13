import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgFor} from '@angular/common';

@Component({
    selector: 'app-countie-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, HttpClientModule, NgFor, RouterLink]
})
export class ShowComponent implements OnInit{
    public data: any;

    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.fetchDetails(); // Chama a função para buscar os detalhes quando o componente é inicializado
    }
  
    public fetchDetails(): void {
      this.http.get('http://65.109.224.144:8000/api/countie/with/state/all').subscribe(
        (response) => {
          this.data = response; 
          console.log(response)
        },
        (error) => {
          console.error('Erro ao buscar detalhes:', error);
          alert(`Erro ao buscar detalhes:, ${JSON.stringify(error.message)}`)
        }
      );
    }
  
}
