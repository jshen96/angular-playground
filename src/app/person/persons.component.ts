import { Component, OnInit, Input} from '@angular/core';
import {Person } from './person'

@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class Persons implements OnInit {
  person : Person = {
      id : 1,
      imgUrl: "src/app/photos/me.jpg",
      firstName : "Jason",
      lastName : "Ong",
      description : "I love to eat and sleep",
      bestFriend : "Kat",
      friends : [
        {
            name : "Layla",
            id : 2
        },
        {
            name : "Kat",
            id : 3
        },
        {
            name : "Tim",
            id : 4
        }
      ]
    };
  addPerson(firstName,lastName,description){

  }
  addFriend(e,t){
    var newFriend = {
      name : e.value,
      id : t.value
     }
    this.person.friends.push(newFriend);
  }
  onSelect(itemId,friendElement){
    this.person.bestFriend = itemId.name;
  }
  constructor() { }

  ngOnInit() {

  }

}
