import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:Owner[]=[];
  user:Owner= new Owner();
  constructor(private userservice:UserService) { }

  ngOnInit() {
    console.log("getting users")
    this.userservice.getUsers().subscribe(data => {
      data.map(e => {
        console.log(e.payload.doc.data())
        this.user=e.payload.doc.data() as Owner
      });
      this.users.push(this.user);
  });
  }

  create(user: Owner){
    this.user.name="mayank";
    this.user.isOwner=false;
    console.log(this.user);
    this.userservice.createUser(this.user);
  }
  // update(user: Owner) {
  //   this.userservice.updatePolicy(user);
  // }

  delete(id: string) {
    console.log(id);
    //this.userservice.deletePolicy(id);
  }
}
