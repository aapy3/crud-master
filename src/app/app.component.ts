import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./jw-modal/jw-modal.component.scss']
})
export class AppComponent {
  title = 'crud-master';
  constructor(private modalService: ModalService){
    
  }
  openModal(id: string) {
    this.modalService.open('123');
}
closeModal(id: string) {
  this.modalService.close('123');
}
}
