import { Component, OnInit } from '@angular/core';
import {SelectService} from '../select.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  users: any;
  userdata!: FormGroup;
  userarr= [
    {
      id: 1,
      label: 'user1'
    },
    {
      id: 2,
      label: 'user2'
    },
    {
      id: 3,
      label: 'user3'
    }
  ]
  data:any[]=[];
  constructor(private fb:FormBuilder, private select:SelectService) { }

  ngOnInit(): void {
    this.userdata = this.fb.group({
      select: [[]],
      select2: [[]],
      select3: [[]]
    })

    this.getallusers();
    this.getuser();
  }

  getallusers(){
    this.select.getdata().subscribe((data)=>{
      // console.log(data);
      this.users = data;
    })
  }
  
  getuser(){
    localStorage.setItem('users', JSON.stringify(this.userarr)); 
    this.data = JSON.parse(localStorage.getItem('users') || '{}')  
    // console.log(this.data) 
    // localStorage.removeItem('users');
  }

}
