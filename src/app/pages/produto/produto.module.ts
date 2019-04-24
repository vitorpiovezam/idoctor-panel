import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  declarations: [
    ProdutoListComponent,
    ProdutoFormComponent
  ]
})
export class ProdutoModule { }
