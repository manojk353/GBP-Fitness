import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { StepstocaloriesComponent } from './modules/stepstocalories/stepstocalories.component';
import { CalorieSnackComponent } from './modules/calorie-snack/calorie-snack.component';
import { ContactsComponent } from './modules/contacts/contacts.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: StepstocaloriesComponent
  }, {
    path: 'articles',
    component:  ArticlesComponent
  }, {
    path: 'caloriesnack',
    component:  CalorieSnackComponent
  },{
    path: 'contacts',
    component:  ContactsComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
