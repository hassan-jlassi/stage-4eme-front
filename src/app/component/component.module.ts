import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { ComposantComponent } from './composant/composant.component';
import { AddcomposantComponent } from './addcomposant/addcomposant.component';
import { UpdatecomposantComponent } from './updatecomposant/updatecomposant.component';
import { SavComponent } from './sav/sav.component';
import { AddsavComponent } from './addsav/addsav.component';
import { UpdatesavComponent } from './updatesav/updatesav.component';
import { StockComponent } from './stock/stock.component';
import { AddstockComponent } from './addstock/addstock.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import { VenteComponent } from './vente/vente.component';
import { AddventeComponent } from './addvente/addvente.component';
import { UpdateventeComponent } from './updatevente/updatevente.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    ButtonsComponent,
    CardsComponent,
    TableComponent,
    ComposantComponent,
    AddcomposantComponent,
    UpdatecomposantComponent,
    SavComponent,
    AddsavComponent,
    UpdatesavComponent,
    StockComponent,
    AddstockComponent,
    UpdatestockComponent,
    VenteComponent,
    AddventeComponent,
    UpdateventeComponent
  ]
})
export class ComponentsModule { }
