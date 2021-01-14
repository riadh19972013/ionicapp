import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  Carte={
    nom:'Chtioui',
    prenom:'Riadh Salem',
    email:'riadh19972013@gmail.com',
    photo:'assets/me.jpg' 
  }

  constructor() {
    
   }

  ngOnInit() 
  {
  }

}
