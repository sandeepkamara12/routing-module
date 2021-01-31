# By default we create routing in app.routing.module.ts file but if we want to create routing module wise means admin and user both have their own area with navigation then
ng g m admin --routing # Module with routing
ng g c admin/list # component in module
ng g c admin/login # component in module

# In admin.module.ts file import both components of admin
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

# In admin.routing.module.ts file import both components of admin to route
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];  

# Add below code to app.components.html file
<ul>
    <li>
        <a routerLink="login">Login</a>
    </li>
    <li>
        <a routerLink="list">list</a>
    </li>
</ul>
<router-outlet></router-outlet>

# Import admin module in app.module.ts file
import { AdminModule } from './admin/admin.module';
  imports: [
    AdminModule
  ]
