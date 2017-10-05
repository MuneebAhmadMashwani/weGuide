import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'company',
  templateUrl:  'company.component.html',
  
})
export class CompanyComponent  {  
   constructor(private router: Router){}
 }
