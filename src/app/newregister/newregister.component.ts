import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../Core/test.service';
import { Registration } from '../Model/Register';

@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent implements OnInit {

  form=new FormGroup({
    username:new FormControl('',[Validators.required ]),
    gender:new FormControl('',[Validators.required ]),
    emailid:new FormControl('',[Validators.required, Validators.email ]),
    contactno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    city:new FormControl('',[Validators.required ]),
    pincode:new FormControl('',[Validators.required , Validators.minLength(6)]),
    dateofbirth:new FormControl('',[Validators.required]),
  });
   

    register = new Registration();
  
  
    constructor(private service:TestService ) { }

    savereg() {
      this.service.addregister(this.register)
      .subscribe(data => {
        console.log(data)
        
        
      }) 
     alert("Registration Successfull")

    }


  ngOnInit(): void {
  }

}
