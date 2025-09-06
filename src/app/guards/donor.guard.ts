import { CanActivateFn , Router} from '@angular/router';
import { inject } from '@angular/core';

export const donorGuard: CanActivateFn = (route, state) => {


  const router = inject (Router);
  
  const role = localStorage.getItem("userRole");

  if(role  === 'DONOR'){
    return true;
  }else{
    console.log("only donors");
    router.navigate(['/login']);
    return false;
  }

};
