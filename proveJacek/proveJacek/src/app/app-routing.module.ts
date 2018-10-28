import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerSendMessageComponent } from "./customer-send-message/customer-send-message.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerComponent } from "./customer/customer.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    },
    {
        path: 'customers',
        component: CustomerComponent,
        children: [
            {
                path: ':id',
                component: CustomerSendMessageComponent
            }
        ]
    }
];

@NgModule({
    //imports:[RouterModule.forRoot(appRoutes, { useHash: true })],
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}