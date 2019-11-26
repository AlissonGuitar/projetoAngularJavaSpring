import { ModuleWithProviders, NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
 
import { ConsultaComponent } from './cliente/consultacliente/consulta.component';
 
import {CadastroComponent} from './cliente/cadastro/cadastro-cliente.component';
 
import { HomeComponent } from './home/home.component';
import { VendedorComponent } from './vendedor/cadastro/vendedor.component';
import { ConsultaVendedorComponent } from './vendedor/consulta-vendedor/consulta-vendedor.component';


 
const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-cliente',         component: ConsultaComponent },
    { path: 'cadastro-cliente',         component: CadastroComponent },
    { path: 'cadastro-cliente/:codigo', component: CadastroComponent },
    { path: 'consulta-vendedor',         component: ConsultaVendedorComponent},
    {path: 'cadastro-vendedor',         component:VendedorComponent},
    {path: 'cadastro-vendedor/:codigo', component:VendedorComponent                          }                         
    
    
 
];
 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting {}


// export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


