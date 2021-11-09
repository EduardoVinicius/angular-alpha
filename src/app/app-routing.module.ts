import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importando os componentes criados
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';

const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'property-binding', component: PropertyBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
