import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HRACalulationComponent } from './hra-calulation/hra-calulation.component';

const routes: Routes = [
  
  { path: 'HRA-Calculator', component: HRACalulationComponent },
  { path: '', redirectTo: '/HRA-Calculator' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
