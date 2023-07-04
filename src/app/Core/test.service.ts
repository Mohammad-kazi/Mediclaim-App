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
    return this.http.get<Registration[]>("https://prod-17.eastasia.logic.azure.com:443/workflows/07901a7546f14a8e8f3197e113157013/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DsSK2Tkk0PNy_aaOiQ2utAN7OGR8caHjueRBc9LLUhw");
  }

  
   
  addregister(register:Registration): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(register);
    console.log(body)
    return this.http.post("https://prod-01.centralus.logic.azure.com:443/workflows/64dc8d9121e94c6389af5f248bb0a6ca/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i8FiLPBDfct494H3Ruu3C47x-tYnDfd2mwtRf-b_ebM"  ,  JSON.stringify(register),{'headers':headers} )
  }
    
  updateregister(register:Registration): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(register);
    console.log(body)
    return this.http.put("https://prod-20.centralus.logic.azure.com:443/workflows/2406d0470ff74f1d99fbdd14cd273317/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qSTlQSwj_GwfuNbXZneB3wChA5zESs5xzq_EgTvHbRc" , JSON.stringify(register), {'headers':headers} )
  }

  addrdet(detail:rdet): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(detail);
    console.log(body)
    return this.http.post("https://prod-02.eastasia.logic.azure.com:443/workflows/da3649361ad54f8e8f6da06a3dc61837/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yifEqwiawGi7SU5rBXHlqoLhV_jJXXo9m5MNNvReXuY" , JSON.stringify(detail),{'headers':headers} )
  }


  
  addrdet1(rcdet:rcdet): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(rcdet);
    console.log(body)
    return this.http.post("https://prod-18.centralus.logic.azure.com:443/workflows/4afe642482964f9e93ac9f1c0c888f75/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mF5VFVZ9vMX9lyrGDy__7Z8lQTnml-9qaamc_P1wWQs" ,  JSON.stringify(rcdet),{'headers':headers} )
  }

  getonereg():Observable<detail[]>
  {
    return this.http.get<detail[]>("https://prod-23.centralus.logic.azure.com:443/workflows/919e59d5a90d4cf78e564fc34a7ce596/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=anbx0_ZtjWe8SwMlFcc40IFyVdiiTjVgeFORInKngqY");
  }

  apply(rcdet:rcdet): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(rcdet);
    console.log(body)
    return this.http.post("https://prod-06.centralus.logic.azure.com:443/workflows/32ad4e0b7a784ea881172b21e57b4e98/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yM2tOGRFKcnDOE703wHfxhBxUgRrNQ4zHCk6s7TLk9w" ,  JSON.stringify(rcdet),{'headers':headers} )
  }

}
