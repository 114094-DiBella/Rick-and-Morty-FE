import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; 
    }, 3000); 
  }
  ngAfterViewInit() {
    const letters = document.querySelectorAll('.loading-text span');
    letters.forEach((letter, index) => {
        (letter as HTMLElement).style.setProperty('--i', index.toString());
    });
  }
}
