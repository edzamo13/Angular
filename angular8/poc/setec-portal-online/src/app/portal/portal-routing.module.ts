import { CatalogoOperadoresComponent } from './catalogo-operadores/catalogo-operadores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalMainComponent } from './portal-main/portal-main.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

const portalRoutes: Routes = [
    {
        path: 'portal',
        component: MainLayoutComponent,
        children: [
           // { path: '', component: PortalContainerComponent, pathMatch: 'full' },
            { path: 'online', component: PortalMainComponent }
        ]
    },
    {
        path: 'portal',
        component: MainLayoutComponent,
        children: [
           // { path: '', component: PortalContainerComponent, pathMatch: 'full' },
            { path: 'catalogoOperadores', component: CatalogoOperadoresComponent }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(portalRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PortalRoutingModule {

}
