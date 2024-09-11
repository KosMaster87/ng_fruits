import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingelfruitComponent } from './singelfruit/singelfruit.component';
import { FruitListDataService } from '../fruit-list-data.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingelfruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})
export class FruitlistComponent {
  fruitListData = inject(FruitListDataService);

  // howItWorks = 'fine';

  fontColorGood = 'green';
  fontColorBad = 'red';

  numLog(index: number) {
    console.log(index);
  }

  nameLog(name: string) {
    console.log(name);
  }

  addComment(comment: string, index: number) {
    // console.log('comment');
    // this.fruitListData.fruitlist[index].reviews.push({
    //   name: 'Kos',
    //   text: comment,
    // });
    this.fruitListData.addCommentToFruit(comment, index);
  }
}
