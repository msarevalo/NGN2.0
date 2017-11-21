import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { LoginComponent } from './login/login.component';
import { RememberPswComponent } from './remember-psw/remember-psw.component';
import { AcudienteComponent } from './acudiente/acudiente.component';
import { AdminComponent } from './admin/admin.component';
import { DocenteComponent } from './docente/docente.component';
import { MenuDecenteAcudienteComponent } from './menu-docente-acudiente/menu-docente-acudiente.component';
import { MenuAdminAcudienteComponent } from './menu-admin-acudiente/menu-admin-acudiente.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    LoginComponent,
    RememberPswComponent,
    AcudienteComponent,
    AdminComponent,
    DocenteComponent,
    MenuDecenteAcudienteComponent,
    MenuAdminAcudienteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
