import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListItem, MatList, MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { StepstocaloriesComponent } from 'src/app/modules/stepstocalories/stepstocalories.component';
import { CalorieSnackComponent } from 'src/app/modules/calorie-snack/calorie-snack.component';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';


@NgModule({
  declarations: [
    DefaultComponent,
    ArticlesComponent,
    StepstocaloriesComponent,
    CalorieSnackComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgMatSearchBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatListModule,
    MatSnackBarModule,
    MatIconModule

  ],
  providers: [
  ]
})
export class DefaultModule { }
