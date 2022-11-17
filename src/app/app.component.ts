import { Component } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  isTrue:boolean=true;
  isTrueSignIn:boolean=true
  ngOnInit(): void {
    
  }

  close() {
    this.isTrue=false;
    this.isTrueSignIn=false
    }
    closedAll(){
this.isTrueSignIn=true
this.isTrue=false
    }
}
