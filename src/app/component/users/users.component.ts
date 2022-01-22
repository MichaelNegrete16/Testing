import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  test:string = 'show'
  contenedorUser: any = []
  result: any = []

  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.service.senData().subscribe((datos:any) => {this.contenedorUser = datos
      console.log(this.contenedorUser)
    })
    this.service.obtenerUser()

  }

  BuscarUser(inputUser: string){
    
     this.result = this.service.buscarUSer(inputUser)
    console.log(this.result)

  }

}
