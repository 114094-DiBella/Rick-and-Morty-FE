import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}
  urlSerie = 'https://play.max.com/show/ab553cdc-e15d-4597-b65f-bec9201fd2dd';
  urlApi = 'https://rickandmortyapi.com/documentation/#/';
  navigateToChatbot() {
    this.router.navigate(['/chatbot']);
  }
  navigateToSerie() {
    window.location.href = this.urlSerie;  
  }

  navigateToContructions() {
    this.router.navigate(['/construction']);
  }

  navigateToApi() {
    window.location.href = this.urlApi;
  }
}
