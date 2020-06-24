import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email=null;

  constructor(
    private auth:AuthService,
    private router:Router,
    private toast:ToastrService
  ) {
    auth.getUser().subscribe((user)=>{
      this.email=user?.email;
    })
   }

  ngOnInit(): void {
  }

  // since signout will be done over the web this method needs to be async
  async handleSignOut(){
    try {

      const res= await this.auth.signOut()
      //signout hone k baad signin route par lekar jaao
      this.router.navigateByUrl('/signin')
      this.toast.info("Login Again to Continue")
      this.email=null
      
    } catch (error) {
      this.toast.error("Something is wrong")
      
    }

  }

}
