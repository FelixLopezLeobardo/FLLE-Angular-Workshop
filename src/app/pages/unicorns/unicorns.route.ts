import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UnicornsComponent } from "./unicorns.component";
import { MaterialModule } from "src/app/material/material.module";


const unicornsRoutes: Routes = [
    {
        path:'',
        component: UnicornsComponent,
        data: {
            pageTitle: 'Unicornios'
        }
    }
]


@NgModule({
    imports:[RouterModule.forChild(unicornsRoutes),MaterialModule],
    exports: [RouterModule]
})

export class UnicornsRouteModule{
    
}