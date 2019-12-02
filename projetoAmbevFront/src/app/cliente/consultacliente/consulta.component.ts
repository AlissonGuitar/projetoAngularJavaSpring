
import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
 
import {ClienteService} from '../../../services/cliente.service';
 
import {Cliente} from '../../../services/cliente';
 
import {Response} from '../../../services/response';
import { CadastroComponent } from '../cadastro/cadastro-cliente.component';
import { OrderPipe } from 'ngx-order-pipe';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { IgxCsvExporterService, IgxCsvExporterOptions, CsvFileTypes,IColumnExportingEventArgs} from "igniteui-angular";


 
@Component({
    selector: 'app-consulta-cliente',
    templateUrl: './consulta-cliente.component.html',
    styleUrls:["./consulta-cliente.component.css"]
  })
  export class ConsultaComponent implements OnInit {
    hoje: number = Date.now();
     filter;
    clientes: Cliente[] = new Array();
    titulo1:string;
    titulo2:string;
    private cadastroComponent:CadastroComponent;
  filtroClientes: Cliente[];
   
    
 
    constructor(private csvExportService: IgxCsvExporterService,private orderPipe:OrderPipe,private clienteService:ClienteService,
                private router: Router){}
 
    ngOnInit() {
    
 
      /*SETA O TÍTULO */
    
      this.titulo1 = "Relatório de Clientes";
      this.titulo2="Projeto Ambev"
    
 
      /*CHAMA O SERVIÇO E RETORNA TODAS OS CLIENTES CADASTRADOS */
      this.clienteService.getClientes().subscribe(res => this.clientes = res);
    }
  
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(codCliente:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.clienteService.excluirCliente(codCliente).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){
                alert(res.mensagem);
                this.clientes.splice(index,1);
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
 
    editar(cod_cliente:number):void{
     
    
      this.router.navigate(['/cadastro-cliente',cod_cliente]);
 
    }

  


    


  download(){
  // this.clienteService.downloadFile(this.clientes, 'clientes');
 // new AngularCsv(this.clientes,"Clientes",this.csvOptions)
 const opt: IgxCsvExporterOptions = new IgxCsvExporterOptions( " ",CsvFileTypes.CSV);
 this.csvExportService.exportData(this.clientes, opt);
  }

 
  


  


  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Clientes :',
    useBom: true,
    noDownload: false,
    headers: ["Codigo do cliente","CNPJ" ,"Razao Social", "Latitude", "Longitude"]
  };


  key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
  }


  
  
  }


 
  



  
 
  

