import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalMainComponent } from './portal/portal-main/portal-main.component';
import { AppModule } from './app.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


const appRoutes: Routes = [
    /* {
         path: '',
         pathMatch: 'full',
         redirectTo: 'portal/online'
     },
     {
         path: '**',
         redirectTo: 'portal/online'
     }*/
    {
        path: 'portal/online',
        component: MainLayoutComponent
    },
    {
        path: '**',
        redirectTo: 'portal/online'

    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
