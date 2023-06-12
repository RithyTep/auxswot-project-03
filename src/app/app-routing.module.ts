import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';

const routes: Routes = [
  {
    path: "",
    // component: AuthlayoutComponent,
    component: MainlayoutComponent,
    children: [
      { path: "", component: LoginComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
