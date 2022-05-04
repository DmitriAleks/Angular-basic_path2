import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-ng2';
backgroundToggle = false
toggle: any = false
arr = [1,2,3,4,5]
obj = [{
  title: 'post1',
  name: 'alex',
  commet: [{
    name: 'alex',
    value: 'tata'
  },
  {
    name: 'alex2',
    value: 'tata2'
  },
  {
    name: 'alex3',
    value: 'tata3'
  }]
},
{
  title: 'post2',
  name: 'alex2',
  commet: [{
    name: 'alex',
    value: 'tata'
  },
  {
    name: 'alex2',
    value: 'tata2'
  },
  {
    name: 'alex3',
    value: 'tata3'
  }]
},
]
}
