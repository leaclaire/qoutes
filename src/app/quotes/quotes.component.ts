import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Leah','morality','Being honest,loving and caring in the society lies on the hands of every citizen.','Nelson Mandela', new Date(2019,7,12),0,0),
    new Quote (2,'Nicholus','Technology','Any sufficiently advanced technology is indistinguishable from magic.','Arthur C. Clarke',new Date(2019,7,14),0,0),
    new Quote (3,'Lexia','Citizens','Never doubt a small group of thoughtfull citizen can change the world ,it is the only thing that ever has.','BrainQuote',new Date(2019,6,3),0,0),
    new Quote (4,'Festus','Business',' Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.','Sun Tzu',new Date(2019,7,7),0,0),
    new Quote (5,'Alex','Religion','Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.','Garrison Keillor',new Date(2019,7,17),0,0),
    new Quote (6,'ken','seasons','n the depth of winter, I finally learned that within me there lay an invincible summer.',' Albert Camus',new Date(2021,4,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  preNum:number;
  lastNum:number;
  counter:number;
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit(): void {
  }

}
