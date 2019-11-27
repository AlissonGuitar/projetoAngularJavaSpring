import  { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ClienteService} from '../../../services/cliente.service';
import {Cliente} from '../../../services/cliente';
import {Response} from '../../../services/response';
import { ConsultaComponent } from '../consultacliente/consulta.component';



@Component({
    selector: 'app-cadastro-cliente',
    templateUrl: '/cadastro-cliente.component.html',
    styleUrls:["/cadastro-cliente.component.css"]
})
export class CadastroComponent implements OnInit {
 
    private titulo:string;
    codigo:number;
    private cliente:Cliente = new Cliente();
    route: any;
    private consulta:ConsultaComponent;
    

    constructor(private router:Router,private activatedRoute:ActivatedRoute, private clienteService: ClienteService)
     {
         
     }

      //carregado no inicializacao do componente
    ngOnInit() { 
           

        this.activatedRoute.params.subscribe(parametro =>{

            if(parametro["codigo"] == undefined)
            {
                this.titulo = "Novo cadastro de clientes "
            }
            else {
                this.titulo = "Alterar cliente"
            this.clienteService.getCliente(Number(parametro["codigo"])).subscribe(res => this.cliente = res);
              
    
            }
        });
    }

    
 

    //função de cadastrar ou alterar cliente
    salvar():void
    {

      
      //verifica codigo e insere
        if(this.cliente.codCliente == undefined)
        {
           // chamando servico para cadastrar
     
             this.clienteService.addCliente(this.cliente).subscribe(response =>
                 {
                     //response do retorno do servico
                    let res:Response = <Response>response;
                   
            //          //se retorna 1 mostra sucesso e limpa form

                     if(res.codigo==1)
                     {
                         alert(res.mensagem);
                          this.cliente = new Cliente();
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
            //alterando informaçoes do cliente resgistrado


           
             
             this.clienteService.alteraCliente(this.cliente).subscribe(response =>
                 {
                     //pegando response retorno do servico
                    let res:Response = <Response>response;
                


                   
                     //se retorna 1 msg de sucesso e redireciona para consulta

                     if(res.codigo ==1)
                     {
                     
                         alert(res.mensagem)
                         this.router.navigate(['/consulta-cliente']);
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