import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipsComponent } from './recips/recips.component';
import { RecipeListComponent } from './recips/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recips/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recips/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipsComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
