import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    divWidth: number = 86;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * this.divWidth/5
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
