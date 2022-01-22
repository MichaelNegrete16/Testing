import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  Api: string = 'https://jsonplaceholder.typicode.com/users'
  // UserFound: object = {}
  user: any = []

  constructor(private http: HttpClient) { }

  obtenerUser(){
     this.http.get(this.Api).subscribe(datos => this.user = datos)

  }


  senData(){
    return this.http.get(this.Api)

 }


  buscarUSer(termino:string){
    let UserFound: any = [] 
    termino.toLowerCase()
    

    for(let i=0; i<this.user.length; i++){
      let userFound = this.user[i];
      let nombre = userFound.name.toLowerCase()
      
      // let username = userFound.username.toLowerCase()
      

      if(nombre.indexOf(termino)>=0 ){
        userFound.idx = i;
        UserFound.push(userFound)
      }

    }
    console.log(UserFound)
    return UserFound;

  }

}
