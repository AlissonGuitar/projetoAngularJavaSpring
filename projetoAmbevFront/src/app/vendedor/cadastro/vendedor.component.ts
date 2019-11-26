import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/services/vendedor';
import { Router, ActivatedRoute } from '@angular/router';
import { VendedorService } from 'src/services/vendedor.service';
import {Response} from '../../../services/response';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  private titulo:string;
  codigo:number;
  private vendedor:Vendedor = new Vendedor();
  route: any;
  

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private vendedorService: VendedorService)
   {
   }

    //carregado no inicializacao do componente
  ngOnInit() { 
         

      this.activatedRoute.params.subscribe(parametro =>{

          if(parametro["codigo"] == undefined)
          {
              this.titulo = "Novo cadastro de vendedor "
          }
          else {
             
              this.titulo = "Alterar vendedor"
              this.vendedorService.getVendedor(Number(parametro["codigo"])).subscribe(res => this.vendedor = res);
            
  
          }
      });
  }


  //função de cadastrar ou alterar vendedor
  salvarVendedor():void
  {
    //verifica codigo e insere
      if(this.vendedor.codVendedor == undefined)
      {
         // chamando servico para cadastrar
           this.vendedorService.addVendedor(this.vendedor).subscribe(response =>
               {
                   //response do retorno do servico
                  let res:Response = <Response>response;
                  
          //          //se retorna 1 mostra sucesso e limpa form

                   if(res.codigo==1)
                   {
                       alert(res.mensagem);
                        this.vendedor = new Vendedor();
                    }
                    else{

                       //caso ocorra exception no servidor
                    
                     alert(res.mensagem)
                     
                }
                  },
                  (erro) =>{ 
                      //erro caso request na API nao funcione
                      alert(erro);

              });
      }
      else{
          //alterando informaçoes do vendedor resgistrado

           
           this.vendedorService.alteraVendedor(this.vendedor).subscribe(response =>
               {
                   //pegando response retorno do servico
                  let res:Response = <Response>response;

                   //se retorna 1 msg de sucesso e redireciona para consulta

                   if(res.codigo ==1)
                   {
                       alert(res.mensagem)
                       this.router.navigate(['/consulta-vendedor']);
                  }
                   else{

                       //caso ocorra exception

                   alert(res.mensagem);
                   }
               },
               (erro) => {
                 
                  //erro caso request na API nao funcione
                   alert(erro);

               });

      }


  }



}
