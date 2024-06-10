import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CustomCommonModule } from '../../shared/common-modules';
import { GenericHttpService } from '../../services/Generic-http.service';
import { UnsubscriptionService } from '../../services/unsubscription.service';
import { ICityDetailModel } from '../../models/cities.interface';
import { HeaderComponent } from '../header/header.component';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomCommonModule, HeaderComponent, WeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  city!: ICityDetailModel;

  GetCity(ev: ICityDetailModel) {
    this.city = ev;
  }
}
