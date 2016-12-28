import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoService } from './todo.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'about', component: AboutMeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
    ],
    exports: [
    RouterModule
    ]
})
export class AppRoutingModule {}