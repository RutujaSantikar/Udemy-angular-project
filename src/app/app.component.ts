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
  serverCreationStatus="no server created";
  serverName="testserver"
  username=""
 
  constructor(){
  
    setTimeout(()=>{
       this.allowNewServer= true;
    },2000);

  }
  ngOnInit(): void {
    
  }
 
  onCreateServer(){
    this.serverCreationStatus ="server is created"+ " " + this.serverName;
  }

  onUpdateServerName(event:any){
    // console.log(event);
    this.serverName= event.target.value;
    console.log(this.serverName);

  }
  onclick(){
    this.username='';
  }
}
