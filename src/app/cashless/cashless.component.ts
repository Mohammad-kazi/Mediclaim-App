import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../Model/Register';
import { TestService } from '../Core/test.service';
import { format } from 'path';
import { rcdet } from '../Model/rcdet';
import { detail } from '../Model/details';

@Component({
  selector: 'app-cashless',
  templateUrl: './cashless.component.html',
  styleUrls: ['./cashless.component.css']
})
export class CashlessComponent implements OnInit {
  form=new FormGroup({
    applicationno:new FormControl('',[Validators.required ]),
  });
    
    robj:detail[];
      
    application = new rcdet();
  
  
    constructor(private service:TestService , ) { }

  ngOnInit(): void {
  }

  addrdet1()
  {
    this.service.addrdet1(this.application).subscribe(data => {
      console.log(data)
      
    })
  
  }

  getonereg()
  {
    return this.service.getonereg().subscribe(res=>{this.robj=res});
  }

  apply()
  {
    this.service.apply(this.application).subscribe(data => {
      console.log(data)
     
    }) 
    alert("Succesfully Applied");
  }
  
}
  

