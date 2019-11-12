import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  apiUrl = "https://my-json-server.typicode.com/darshanp40/employeedb/employees"

  constructor(private http: HttpClient) { }

  registerUser(payload: Object) {
    if(payload['id']){
      return this.http.put(`${this.apiUrl}/${payload['id']}`, payload, { headers: { 'content-language': 'en' } })
      .pipe(map((res: any) => {
        if (res.statusCode === 200) { return res } else {
          console.error(res);
          return;
        }
      })
      )
    }
    else{
      return this.http.post(`${this.apiUrl}`, payload, { headers: { 'content-language': 'en' } })
      .pipe(map((res: any) => {
        if (res.statusCode === 200) { return res } else {
          console.error(res);
          return;
        }
      })
      )
    }
   
  }

  getEmployee(){
    return this.http.get(`${this.apiUrl}`, { headers: { 'content-language': 'en' } })
      .pipe(map((res: any) => {

        if (res) { return res[0] } else {
          console.error(res);
          return;
        }
      })
      )
  }

  deleteUser(payload){
    return this.http.post(`${this.apiUrl}/${payload.id}`,{}, { headers: { 'content-language': 'en' } })
      .pipe(map((res: any) => {
        if (res.statusCode === 200) { return res } else {
          console.error(res);
          return;
        }
      })
      )
  }
}
