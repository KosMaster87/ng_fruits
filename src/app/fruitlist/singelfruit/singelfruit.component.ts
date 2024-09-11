import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singelfruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singelfruit.component.html',
  styleUrl: './singelfruit.component.scss',
})
export class SingelfruitComponent {
  // @Input("testNumber") fruitNumber = 0;
  // @Input() fruitNumber = 0;
  @Input() fruit = {
    name: 'Apfel',
    img: 'apple.png',
    description:
      'Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.',
    genus: 'Kernobstgewächsen innerhalb der Familie der Rosengewächse',
    stars: 2.3,
    reviews: [
      { name: 'Kevin W.', text: 'ist lecker' },
      { name: 'Arne P.', text: 'nicht so meins' },
    ],
  };

  inputData = '';

  /**
   * In dem Output in den Parameterbereich kann man auch den Namen für das new EventEmitter vergeben.
   */
  @Output() fruitName = new EventEmitter<string>();

  sendInputData() {
    this.fruitName.emit(this.inputData);
    this.inputData = '';
    // console.log(this.inputData);
    // this.inputData = 'Moin';
  }
}
