import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoadingComponent } from './loading/loading.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']); // Redirige a Home después de 3 segundos
    }, 3000); // Simula 3 segundos de carga
  }
}
