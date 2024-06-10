import { Component, EventEmitter, Output } from '@angular/core';
import { CustomCommonModule } from '../../shared/common-modules';
import { MatSelectChange } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { ICityDetailModel, ICountryModel } from '../../models/cities.interface';
import { GenericHttpService } from '../../services/Generic-http.service';
import { UnsubscriptionService } from '../../services/unsubscription.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CustomCommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  countryData: ICountryModel = { data: [], error: false, msg: "" };
  cities!: string[];
  countryCode: string = "";
  @Output() cityEvent: EventEmitter<ICityDetailModel> = new EventEmitter<ICityDetailModel>();
  constructor(private _serv: GenericHttpService, private _subService: UnsubscriptionService) {
  }
  ngOnInit(): void {
    this.GetCountries();
  }
  GetCountries() {
    const sub = this._serv.GenericGetService<ICountryModel>(this._serv.countriesUrl).subscribe((d: ICountryModel) => {
      this.countryData = d;
    })
    this._subService.AddSub(sub);
  }
  GetCitiesByCountry(ev: MatSelectChange) {
    this.cities = ev.value.cities;
    this.countryCode = ev.value.iso2;
  }
  GetCityDetail(ev: MatSelectChange) {
    const url = this._serv.cityDetailUrl + `name=${ev.value}&country=${this.countryCode}`;
    const sub = this._serv.GenericGetService<ICityDetailModel[]>(url, this._serv.cityHeaders).subscribe((d: ICityDetailModel[]) => {
      this.cityEvent.emit(d[0]);
    });
    this._subService.AddSub(sub);
  }
  ngOnDestroy(): void {
    this._subService.UnSubscribe();
  }
}



