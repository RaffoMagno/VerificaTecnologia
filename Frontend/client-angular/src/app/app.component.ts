import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Mante } from './mante.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'client-angular'
  mante: Mante[] = [];
    constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.http.get<{mante: Mante[]}>('https://3000-raffomagno-verificatecn-t7a2eijs926.ws-eu116.gitpod.io/api/mante')
      .subscribe({

        next: (response) => {
          this.mante = response.mante;
          console.log('Received data:', this.mante);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
  }


}
