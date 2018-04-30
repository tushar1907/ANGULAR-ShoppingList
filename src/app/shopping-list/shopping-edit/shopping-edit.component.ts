import { Component, OnInit, ViewChild, ElementRef, Output , EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('amount') amountInput: ElementRef;
  @Output() itemEvent = new EventEmitter<Ingredient>();


  ngOnInit() {
  }


  addItem(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(ingName ,ingAmount);
    this.itemEvent.emit(newIngredient);
  }
}
