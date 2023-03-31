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
  serverCreated=false;
  servers=[
    'testserver',
    'testserver1',
    'testserver2',
    'testserver3',
  ]
 
  constructor(){
  
    setTimeout(()=>{
       this.allowNewServer= true;
    },2000);

  }
  ngOnInit(): void {
    
  }
 
  onCreateServer(){
    this.serverCreated= true;
    this.servers.push(this.serverName);
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
