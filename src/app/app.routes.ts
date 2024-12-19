import { Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { ConstructionComponent } from './construction/construction.component';

export const routes: Routes = [
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  { path: 'loading', component: LoadingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'construction', component: ConstructionComponent },
];
