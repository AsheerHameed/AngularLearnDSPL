import { Component } from '@angular/core';

@Component({
  selector: 'app-map-reduce',
  templateUrl: './map-reduce.component.html',
  styleUrls: ['./map-reduce.component.scss'],
})
export class MapReduceComponent {
  celsius_temperatures = [0, 15, 30, 45, 60];
  string_list = ["level", "python", "radar", "programming", "civic", "java", "deified", "algorithm"]
  number_list = [2, 7, 12, 15, 23, 30, 42, 57, 61, 70]
  ngOnInit(): void {
    // this.getFarenHeit();
    // this.getStringLength();
    // console.log("some",this.even_list)
console.log("The value with length greater than 5",this.string_length)
  }

  //reduce
  even_list_filter = this.number_list.filter((n)=> n%2 == 0)

  string_length = this.string_list.filter((n)=> n.length>5 )

  //map
  even_list = this.celsius_temperatures.map((value) => {
    if (value % 2 == 0) {
      return value * 2;
    } else {
      return value;
    }
  });

  ngAfterViewInit(){
    console.log(this.even_list_filter);

  }
  getFarenHeit() {
    this.celsius_temperatures.map((value) => {
      console.log((value * 9) / 5 + 32);
    });
  }

  getStringLength() {
    this.string_list.map((value) => {
      console.log(value, value.length);
    });
  }
}
