import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { rdet } from '../Model/rdet';
import { TestService } from '../Core/test.service';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {

  form=new FormGroup({
    billno:new FormControl('',[Validators.required ]),
    billingamount:new FormControl('',[Validators.required]),
    polyno:new FormControl('',[Validators.required ]),
  });

  constructor(private service:TestService ) {}

  obj = new rdet();
  
  ngOnInit(): void {
  }

  saverdet() {
    this.service.addrdet(this.obj)
    .subscribe(data => {
      console.log(data)
    
    }) 
    alert("Successfully Applied");
  }

}
