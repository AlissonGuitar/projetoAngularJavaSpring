import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Cliente} from '../services/cliente';
import {ConfigService} from './config.service';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class ClienteService{

    private baseUrlService:string='';
    private headers:HttpHeaders;
    private configService: ConfigService = new ConfigService();
    httpClient: any;

    constructor(private http:HttpClient)
    {
        //Url do servico rest
         this.baseUrlService = this.configService.getUrlService() + 'clienteModels/';


        
 
         //Add json no header
         this.headers = new HttpHeaders({ 'Content-Type': 'application/json', })
        
        
         // this.options = new RequestOptions({ headers: this.headers });


        
    }
    

    //consultar clientes cadastrados
    getClientes()
    {
        // return this.http.get(this.baseUrlService).map(res=> res.json());
        return this.http.get<Cliente[]>(this.baseUrlService).pipe();
    }

    //inclui um novo cliente
    addCliente(cliente:Cliente)
    {
        return this.http.post(this.baseUrlService,JSON.stringify(cliente),{ headers: this.headers}).pipe();
    }

    //exclui cliente
    excluirCliente(codigo:number)
    {
        return this.http.delete(this.baseUrlService + codigo).pipe();
    }

    //consulta cliente por codigo

    getCliente(codigo:number)
    {
        return this.http.get<Cliente>(this.baseUrlService + codigo).pipe();
    }

    //altera cliente
    alteraCliente(cliente:Cliente)
    {
        return this.http.put(this.baseUrlService,JSON.stringify(cliente),{ headers: this.headers }).pipe();
       

    }




}


