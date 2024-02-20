import { NgModule } from '@angular/core';
import { ComponentModule } from './component.module';
import { HeaderComponent } from '../component/header/header.component';
import { DefaultComponent } from '../component/default/default.component';

const sharedComponents = [
  HeaderComponent,
  DefaultComponent
]


@NgModule({
  declarations: [sharedComponents],
  exports: [sharedComponents, ComponentModule],
  imports: [ComponentModule],
})
export class SharedModule {}
