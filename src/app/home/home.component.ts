import { Component, OnInit } from '@angular/core';
import { animate, state, transition, trigger, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      state('state1', style({
        opacity: 1
      })),
      state('state2',   style({
        opacity: 0
      })),
      transition('state1 => state2', animate('500ms ease-in')),
      transition('state2 => state1', animate('500ms ease-in'))
   ]),
   trigger('fade2', [
    state('state1', style({
      opacity: 0
    })),
    state('state2',   style({
      opacity: 1
    })),
    transition('state1 => state2', animate('500ms ease-in')),
    transition('state2 => state1', animate('500ms ease-in'))
 ])
]
})
export class HomeComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>this.toggle(),3000)
  }
  irPara(){
    console.log('teste')
  }
   get stateName() {
    return this.show ? 'state1' : 'state2';
  }

  toggle() {
    this.show = !this.show;
    setTimeout(()=>this.toggle(),3000)

  }
  irParaPlaystore(){
    window.open("https://play.google.com/store/apps/details?id=app.keroajuda.caixamagica")
  }



}
