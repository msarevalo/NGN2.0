import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { LoginComponent } from './login/login.component';
import { RememberPswComponent } from './remember-psw/remember-psw.component';
import { AcudienteComponent } from './acudiente/acudiente.component';
import { AdminComponent } from './admin/admin.component';
import { DocenteComponent } from './docente/docente.component';
import { MenuDecenteAcudienteComponent } from './menu-docente-acudiente/menu-docente-acudiente.component';
import { MenuAdminAcudienteComponent } from './menu-admin-acudiente/menu-admin-acudiente.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import {LoginGuard} from './login.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin.component.html', component: AdminComponent, canActivate: [LoginGuard]}
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
    MenuAdminAcudienteComponent,
    BienvenidaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
