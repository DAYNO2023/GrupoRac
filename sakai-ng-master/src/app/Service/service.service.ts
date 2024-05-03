import { Injectable } from '@angular/core';
import {Departamento} from '../Models/DepartamentoViewModel';
import {Ciudad} from '../Models/CiudadViewModel';
import { HttpClient } from '@angular/common/http';
import { Cargo } from '../Models/CargoViewModel';
import { Cliente } from '../Models/ClienteViewModel';
import { EstadoCivil } from '../Models/EstadoCivilViewModel';
import { Marca } from '../Models/MarcaViewModel';
import { Modelo } from '../Models/ModeloViewModel';
import { Sede } from '../Models/SedeViewModel';
import { Vehiculo } from '../Models/VehiculoViewModel';
import { Usuario } from '../Models/UsuarioViewModel';





@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  url = 'https://localhost:44320/API/Departamento/List'

  getDepartamentos(){
    return this.http.get<Departamento[]>(this.url)
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServiceCiu {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListCiu'

  getCiudad(){
    return this.http.get<Ciudad[]>(this.urlC)
  }
}
@Injectable({
  providedIn: 'root'
})

export class ServiceCargo {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListCargo'

  getCargo(){
    return this.http.get<Cargo[]>(this.urlC)
  }
}
@Injectable({
  providedIn: 'root'
})

export class ServiceCliente {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListCli'

  getCliente(){
    return this.http.get<Cliente[]>(this.urlC)
  }
}

@Injectable({
  providedIn: 'root'
})

export class ServiceEstadoCivil {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListEstC'

  getEstadoCivil(){
    return this.http.get<EstadoCivil[]>(this.urlC)
  }
}
@Injectable({
  providedIn: 'root'
})

export class ServiceMarca {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListMarca'

  getMarca(){
    return this.http.get<Marca[]>(this.urlC)
  }
}
@Injectable({
  providedIn: 'root'
})

export class ServiceModelo {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListModelo'

  getModelo(){
    return this.http.get<Modelo[]>(this.urlC)
  }
}
@Injectable({
  providedIn: 'root'
})

export class ServiceSede {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListSede'

  getSede(){
    return this.http.get<Sede[]>(this.urlC)
  }
}
@Injectable({
  providedIn: 'root'
})

export class ServiceVeh {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListVehiculo'

  getVeh(){
    return this.http.get<Vehiculo[]>(this.urlC)
  }
}
@Injectable({
  providedIn: 'root'
})

export class ServiceUsuario {

  constructor(private http:HttpClient) { }


  urlC = 'https://localhost:44320/API/Departamento/ListUsua'

  getUsuario(){
    return this.http.get<Usuario[]>(this.urlC)
  }
}