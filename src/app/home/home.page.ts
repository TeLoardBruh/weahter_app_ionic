import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weather: any;
  isLoading = false;

  public form = {
    city: null
  }
  constructor(
    private weatherService: WeatherService,
    private loadingController: LoadingController,
    private router: Router,
    // private storage: Storage

  ) {
    
   }

  ngOnInit() {
    
    this.onLoadWeather();

    // console.log(this.url);
  }

  onLoadWeather() {
    // if (this.form.city === null) {
      return this.weatherService.getApi().subscribe(
        res => {
          this.weather = res;
          console.log(res);
        });
    // }
    // return this.weatherService.callingApi(this.form.city).subscribe(
    //   res => {
    //     this.weather = res;
    //     console.log(res);
    //   });
  }

  onSubmit() {
    this.isLoading = true;

    this.loadingController.create(
      {
        keyboardClose: true,
        message: 'Searching...'
      }
      ).then(
        loadingElement => 
        {
          loadingElement.present();
          setTimeout(() => {
            this.isLoading = false;
            loadingElement.dismiss();
            this.router.navigateByUrl('/weather');
          },1500);
        }

      );
    return this.weatherService.callingApi(this.form.city);
    
  }

  searchCity(e) {
    let value = e.detail.value;
    console.log(value);
    // this.weatherService.callingApi(value);
    if(value == ''){
      this.onLoadWeather;
      return;
    }
    else{
      this.weatherService.callingApi(value).subscribe(
        res => {
          this.weather = res;
          console.log(res);
        }
      )
    }
  }


}
