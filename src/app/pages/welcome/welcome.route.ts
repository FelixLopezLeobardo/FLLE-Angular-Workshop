import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome.component";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material/material.module";


const welcomeRoute: Routes = [
    {
        path:'',
        component: WelcomeComponent,
        data: {
            pageTitle: 'Bienvenidos'
        }
    }
]


@NgModule({
    imports:[RouterModule.forChild(welcomeRoute),MaterialModule],
    exports: [RouterModule]
})

export class welcomeRouteModule{
    
}