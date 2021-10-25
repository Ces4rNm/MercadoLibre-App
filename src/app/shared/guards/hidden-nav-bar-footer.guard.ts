import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class HiddenNavBarFooterGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Show nav bar and hide footer
    this.appService.showNavBar = this.appService.showFooter = false;
    // Go
    return true;
  }
  
}
