import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home/login'
    }, {
        path: '**',
        redirectTo: 'home/login'
    }, /*{
        path: 'home/login',
        component: AppComponent
    }*/
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
