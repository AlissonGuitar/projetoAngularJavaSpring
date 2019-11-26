import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/services/vendedor';
import { VendedorComponent } from '../cadastro/vendedor.component';
import { VendedorService } from 'src/services/vendedor.service';
import { Router } from '@angular/router';
import {Response} from '../../../services/response';

@Component({
  selector: 'app-consulta-vendedor',
  templateUrl: './consulta-vendedor.component.html',
  styleUrls: ['./consulta-vendedor.component.css']
})
export class ConsultaVendedorComponent implements OnInit {

  vendedores: Vendedor[] = new Array();
    titulo:string;
    teste:string;
    private vendedorComponent:VendedorComponent;
    
 
    constructor(private vendedorService:VendedorService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O TÍTULO */
    
      this.titulo = "Registros Cadastrados";
     

 
      /*CHAMA O SERVIÇO E RETORNA TODAS OS Vendedores CADASTRADOS */
      this.vendedorService.getVendedores().subscribe(res => this.vendedores = res);
      
      
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(codVendedor:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.vendedorService.excluirVendedor(codVendedor).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){
                alert(res.mensagem);
                this.vendedores.splice(index,1);
              }
              else{
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {                    
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });        
      }
 
    }
 
    editar(codVendedor:number):void{
     
      
       
      this.router.navigate(['/cadastro-vendedor',codVendedor]);
 
    }

}
