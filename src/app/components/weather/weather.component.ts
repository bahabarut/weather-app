import { CustomCommonModule } from './../../shared/common-modules';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICityDetailModel } from '../../models/cities.interface';
import { GenericHttpService } from '../../services/Generic-http.service';
import { UnsubscriptionService } from '../../services/unsubscription.service';
import { UpperFirstCharPipe } from '../../pipes/upper-first-char.pipe';
import { IWeatherResultModel } from '../../models/weather.interface';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CustomCommonModule, UpperFirstCharPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnChanges {
  @Input({ required: true }) city!: ICityDetailModel;
  weatherInfo!: IWeatherResultModel;
  currentCity: string = "";
  emptyDt: string = "Please select a city!!";
  firstCahnge: boolean = true;
  constructor(private _serv: GenericHttpService, private _subService: UnsubscriptionService,
    private _toastr: ToastService
  ) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["city"] && changes["city"].currentValue) {
      const city = changes["city"].currentValue as ICityDetailModel;
      this.currentCity = city.name;
      this.firstCahnge = false;
      this.GetWeather(city.latitude.toFixed(2), city.longitude.toFixed(2));
    } else {
      if (!this.firstCahnge)
        this._toastr.ShowToast("Not Found Weather Information", false);
    }
  }

  GetWeather(lat: string, lon: string) {
    const url = this._serv.openWtUrl + `lat=${lat}&lon=${lon}&lang=en&appid=` + this._serv.openWtApiKey;
    const sub = this._serv.GenericGetService<IWeatherResultModel>(url).subscribe((d: IWeatherResultModel) => {
      this.weatherInfo = d;

      switch (this.weatherInfo.current.weather[0].icon) {
        case "01d":
        case "02d":
        case "03d":
        case "04d":
        case "01n":
        case "02n":
        case "03n":
        case "04n":
          this.PlaySound("/assets/sounds/sunny.mp3");
          break;
        default:
          this.PlaySound("/assets/sounds/rain.mp3");

      }
    });
    this._subService.AddSub(sub);
  }

  ToCelsius(k: number): number {
    return Math.floor(k - 273.15);
  }

  //1=date 2=time 3=day
  GetDateFormatter(timestamp: number, formatType: number) {
    if (timestamp.toString().length === 10) {
      timestamp *= 1000; // Saniyeyi milisaniyeye çevir
    }
    const date = new Date(timestamp);
    const dateOpt: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const timeOpt: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
    const dayOpt: Intl.DateTimeFormatOptions = { weekday: 'long' };

    if (formatType == 2)
      return date.toLocaleTimeString("en-US", timeOpt);
    else
      return date.toLocaleDateString("en-US", formatType == 1 ? dateOpt : dayOpt);

  }
  currentAudio!: HTMLAudioElement;
  PlaySound(source: string) {
    if(this.currentAudio){
      this.currentAudio.pause();
    }
    const audio = new Audio();
    audio.src = source;
    audio.load();
    audio.play();

    this.currentAudio = audio;
  }

  ngOnDestroy(): void {
    this._subService.UnSubscribe();
  }
}