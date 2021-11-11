import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importando os componentes criados
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { MegaSaltoComponent } from './components/mega-salto/mega-salto.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';

const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'property-binding', component: PropertyBindingComponent},
  {path: 'event-binding', component: EventBindingComponent},
  {path: 'two-way-binding', component: TwoWayComponent},
  {path: 'mega-salto', component: MegaSaltoComponent},
  {path: 'ng-if', component: NgIfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
