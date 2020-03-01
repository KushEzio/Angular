import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ProductHomeComponent } from "./components/product-home/product-home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { ProductModule } from "./product.module";
import { CanEditGuard } from './guards/can-edit.guard';


const routes: Route[]=[
    {
        path:'products',
        component:ProductHomeComponent,
        children:[
            {
                path:"", //default the list page as child component
                component: ProductListComponent
            },
            {
                path: "create",
                component: ProductEditComponent
            },
            {
                path: 'edit/:id',
                component: ProductEditComponent,
                canActivate:[CanEditGuard]  //array of services, all the guard should return true
            },
            {
                path: 'search',
                component: ProductSearchComponent
            }
            
        ]


    }
]

@NgModule({
    
    imports:[
        ProductModule,
        RouterModule.forChild(routes)
    ]

})

export class ProductRoutingModule{

    

}