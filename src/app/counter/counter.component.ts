import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'cp-counter',
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.css']
})
export class CounterComponent implements OnInit {
    counter: number = 0;

    numIncrement(): void{
        console.log(this.counter = this.counter + 1);
    }

    numDecrement(): void {
        console.log(this.counter = this.counter - 1);

    }

    ngOnInit(): void {
        this.counter = 0;
    }
}