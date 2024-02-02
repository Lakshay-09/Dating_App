import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (!user) {
          this.toastr.error('You cannot enter this area');
          this.router.navigate(['/']); 
          return false;
        }
        console.log(user.role);
        const roles = user.role || [];
        const requiredRoles = route.data['roles'] as Array<string>;
        console.log(roles);
        if (requiredRoles && requiredRoles.some(role => roles.includes(role))) {
          return true;
        } else {
        
          this.router.navigate(['/']); 
          return false;
        }
      })
    );
  }
}
