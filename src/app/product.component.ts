import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="{{ data.imageUrl }}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ data.productName }}
                </h4>
                {{ data.releasedDate }}
                <app-rating
                    [rating]="data.rating"
                    [numOfReviews]="data.numOfReviews">
                </app-rating>
                <br>
                {{ data.description }}
            </div>
        </div>
    `,
    styles: [`
        .media {
            margin-bottom: 20px;
        }
    `]
})
export class ProductComponent {
    @Input() data;
}
