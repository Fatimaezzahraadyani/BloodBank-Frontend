import { CanActivateFn , Router} from '@angular/router';
import { inject } from '@angular/core';


export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject (Router);

  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("userRole");

  if(role  === 'ADMIN'){
    return true;
  }else{
    console.log("only admin");
    router.navigate(['/login']);
    return false;
  }
};
