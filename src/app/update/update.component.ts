import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../Model/Register';
import { TestService } from '../Core/test.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  @Input() OnlyNumber: boolean;  

  form=new FormGroup({
    policyno:new FormControl('',[Validators.required ]),
    emailid:new FormControl('',[Validators.required , Validators.email]),
    contactno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    city:new FormControl('',[Validators.required ]),
    pincode:new FormControl('',[Validators.required , Validators.minLength(6)]),
  });

constructor(private router: Router  , private service:TestService ) {

}
  ngOnInit(): void {
  }
  register = new Registration();

  
  updreg() {
    this.service.updateregister(this.register)
    .subscribe(data => {
      console.log(data)
     
    }) 
    alert("Registrtion Update Successful")
  }

}
