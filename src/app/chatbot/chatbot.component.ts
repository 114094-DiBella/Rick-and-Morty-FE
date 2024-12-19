import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChatbotComponent {
  userMessage: string = '';
  conversation: any[] = [];
  timeoutDuration = 30000; // 30 segundos
  timeoutId: any;
  timeoutMessage: string = 'Estoy demasiado ebrio para contestar, Morty';
  isWaitingForResponse: boolean = false;  // Estado para saber si estamos esperando la respuesta del bot
  initialMessage: string = `¡Ey, Morty! Soy el chat de Rick y Morty, y estoy aquí para responder tus preguntas... bueno, las que estén relacionadas con la serie. Si vienes a molestarme con cosas aburridas, olvídalo. ¡Vamos al grano, Morty!`;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.conversation.push({ text: this.initialMessage, isUser: false });
  }



  sendMessage() {
    if (this.userMessage.trim() !== '') {
      this.conversation.push({ text: this.userMessage, isUser: true });
      const userMessage = this.userMessage;
      this.userMessage = '';
      this.isWaitingForResponse = true;

      // Establece el timeout
      this.timeoutId = setTimeout(() => {
        if (this.isWaitingForResponse) {
          this.conversation.push({ text: this.timeoutMessage, isUser: false });
          this.isWaitingForResponse = false;
        }
      }, this.timeoutDuration);

      this.chatService.sendMessage(userMessage).subscribe({
        next: (response) => {
          clearTimeout(this.timeoutId); // Limpia el timeout si hay respuesta
          if (this.isWaitingForResponse) {
            this.conversation.push({ text: response.answer, isUser: false });
            this.isWaitingForResponse = false;
          }
        },
        error: (error) => {
          clearTimeout(this.timeoutId); // Limpia el timeout en caso de error
          if (this.isWaitingForResponse) {
            this.conversation.push({ text: this.timeoutMessage, isUser: false });
            this.isWaitingForResponse = false;
          }
        }
      });
    }
  }

  ngOnDestroy() {
    // Limpia el timeout cuando el componente se destruye
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}