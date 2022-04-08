import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cr-select',
  templateUrl: './cr-select.component.html',
  styleUrls: ['./cr-select.component.scss']
})
export class CrSelectComponent implements OnInit {
@Input() userlist!:string;
@Input() localuser!:string;
@Input() localarr!:string;

  constructor() { 
   
  }

  ngOnInit(): void {

  }

  
  
}
