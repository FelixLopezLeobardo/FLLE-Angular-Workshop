import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material/material.module";

const loginRoutes: Routes = [
    {
        path:'',
        component: LoginComponent,
        data: {
            pageTitle: 'Unicornios'
        }
    }
]


@NgModule({
    imports:[RouterModule.forChild(loginRoutes),MaterialModule],
    exports: [RouterModule]
})

export class LoginRouteModule{
    
}