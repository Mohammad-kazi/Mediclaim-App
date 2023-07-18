import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registration } from '../Model/Register';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { rdet } from '../Model/rdet';
import { rcdet } from '../Model/rcdet';
import { detail } from '../Model/details';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  register = new Registration();


    
  

  constructor(private http:HttpClient) { }
 
 
  getallreg():Observable<Registration[]>
  {
    return this.http.get<Registration[]>("");//Provide a api url here....
  }

  
   
  addregister(register:Registration): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(register);
    console.log(body)
    return this.http.post("");//Provide a api url here....
  }
    
  updateregister(register:Registration): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(register);
    console.log(body)
    return this.http.put("");//Provide a api url here....
  }

  addrdet(detail:rdet): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(detail);
    console.log(body)
    return this.http.post("");//Provide a api url here....
  }


  
  addrdet1(rcdet:rcdet): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(rcdet);
    console.log(body)
    return this.http.post("");//Provide a api url here....
  }

  getonereg():Observable<detail[]>
  {
    return this.http.get<detail[]>("");//Provide a api url here....
  }

  apply(rcdet:rcdet): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(rcdet);
    console.log(body)
    return this.http.post("");//Provide a api url here....
  }

}
