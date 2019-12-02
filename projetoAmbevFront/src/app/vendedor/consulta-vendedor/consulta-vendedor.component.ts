import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/services/vendedor';
import { VendedorComponent } from '../cadastro/vendedor.component';
import { VendedorService } from 'src/services/vendedor.service';
import { Router } from '@angular/router';
import {Response} from '../../../services/response';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { OrderPipe } from 'ngx-order-pipe';
import { IgxCsvExporterService, IgxCsvExporterOptions, CsvFileTypes } from "igniteui-angular";

@Component({
  selector: 'app-consulta-vendedor',
  templateUrl: './consulta-vendedor.component.html',
  styleUrls: ['./consulta-vendedor.component.css']
})
export class ConsultaVendedorComponent implements OnInit {
   filter;
  vendedores: Vendedor[] = new Array();
    titulo1:string;
    titulo2:string;
    teste:string;
    private vendedorComponent:VendedorComponent;
    hoje: number = Date.now();
    
 
    constructor(private csvExportService: IgxCsvExporterService,private orderPipe:OrderPipe,private vendedorService:VendedorService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O TÍTULO */
    
      this.titulo1 = "Relatório de Vendedores";
      this.titulo2="Projeto Ambev"

 
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
    cadastrarclienteneNesseVendedor(codVendedorForCliente:number):void{
      this.router.navigate(['home',codVendedorForCliente]);
    }

    download(){
      // this.clienteService.downloadFile(this.clientes, 'clientes');
     // new AngularCsv(this.vendedores,"Vendedores",this.csvOptions)
     const opt: IgxCsvExporterOptions = new IgxCsvExporterOptions( " ",CsvFileTypes.CSV);
 this.csvExportService.exportData(this.vendedores, opt);
      
      }
    
    
      csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Vendedores :',
        useBom: true,
        noDownload: false,
        headers: ["Codigo do Vendedor","CPF","Nome do Vendedor", "Latitude", "Longitude"]
      };

      key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
  }
    
    

}
