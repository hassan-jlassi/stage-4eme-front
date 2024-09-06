import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import {ComposantComponent} from "./composant/composant.component";
import {AddcomposantComponent} from "./addcomposant/addcomposant.component";
import {UpdatecomposantComponent} from "./updatecomposant/updatecomposant.component";
import {SavComponent} from "./sav/sav.component";
import {AddsavComponent} from "./addsav/addsav.component";
import {UpdatesavComponent} from "./updatesav/updatesav.component";
import {StockComponent} from "./stock/stock.component";
import {AddstockComponent} from "./addstock/addstock.component";
import {UpdatestockComponent} from "./updatestock/updatestock.component";
import {VenteComponent} from "./vente/vente.component";
import {AddventeComponent} from "./addvente/addvente.component";
import {UpdateventeComponent} from "./updatevente/updatevente.component";


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
      {
        path: 'composant',
        component: ComposantComponent
      },
      {
        path: 'addcomposant',
        component: AddcomposantComponent
      },
      {
        path: 'sav',
        component: SavComponent
      },
      {
        path: 'addsav',
        component: AddsavComponent
      },
      {
        path: 'stock',
        component: StockComponent
      },
      {
        path: 'addstock',
        component: AddstockComponent
      },
      {
        path: 'vente',
        component: VenteComponent
      },
      {
        path: 'addvente',
        component: AddventeComponent
      },
      { path: 'updatecomposant/:id', component: UpdatecomposantComponent },
      { path: 'updatesav/:id', component: UpdatesavComponent },
      { path: 'updatestock/:id', component: UpdatestockComponent },
      { path: 'updatevente/:id', component: UpdateventeComponent },
			{
				path: 'buttons',
				component: ButtonsComponent
			}
		]
	}
];
