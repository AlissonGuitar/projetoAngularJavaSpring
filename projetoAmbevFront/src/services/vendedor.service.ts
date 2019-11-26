import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Vendedor} from '../services/vendedor';
import {ConfigService} from './config.service';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class VendedorService{

    private baseUrlService:string='';
    private headers:HttpHeaders;
    private configService: ConfigService = new ConfigService();
    httpClient: any;

    constructor(private http:HttpClient)
    {
        //Url do servico rest
         this.baseUrlService = this.configService.getUrlService() + 'vendedorModels/';


        
 
         //Add json no header
         this.headers = new HttpHeaders({ 'Content-Type': 'application/json', })
        
        
      


        
    }
    

    //consultar vendedores cadastrados
    getVendedores()
    {
        // return this.http.get(this.baseUrlService).map(res=> res.json());
        return this.http.get<Vendedor[]>(this.baseUrlService).pipe();
        
    }

    //inclui um novo vendedor
    addVendedor(vendedor:Vendedor)
    {
        return this.http.post(this.baseUrlService,JSON.stringify(vendedor),{ headers: this.headers}).pipe();
    }

    //exclui vendedor
    excluirVendedor(codigo:number)
    {
        return this.http.delete(this.baseUrlService + codigo).pipe();
    }

    //consulta vendedor por codigo

    getVendedor(codigo:number)
    {
        return this.http.get<Vendedor>(this.baseUrlService + codigo).pipe();
    }

    //altera vendedor
    alteraVendedor(vendedor:Vendedor)
    {
        return this.http.put(this.baseUrlService,JSON.stringify(vendedor),{ headers: this.headers }).pipe();

    }

}


