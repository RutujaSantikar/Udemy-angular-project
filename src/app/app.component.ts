import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-app';

  name='rutuja'

  id='10'
  allowNewServer=false
 
  constructor(){
  
    setTimeout(()=>{
       this.allowNewServer= true;
    },2000);

  }
  ngOnInit(): void {
    
  }

}
