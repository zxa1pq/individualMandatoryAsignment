import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: 'rating.component.html',
    styles: [`
        .glyphicon-star {
            color: blue;
        }
    `]
})
export class RatingComponent {
    @Input('rating') rating = 0;
    @Input() numOfReviews = 0;

    onClick(ratingValue) {
        this.rating = ratingValue;
    }
}
