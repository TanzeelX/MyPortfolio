import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage';
import { Contact } from './components/contact/contact';
import { Collaboration } from './components/collaboration/collaboration';
import { Project } from './components/project/project';


export const routes: Routes = [
    {path : '', component: Landingpage},
    {path : 'contact', component:Contact},
    {path : 'collaboration', component:Collaboration},
    {path : 'project', component:Project},
    {path : '**', redirectTo: '' }
];
