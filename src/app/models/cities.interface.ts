export interface ICityDetailModel {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    population: number;
    is_capital: boolean;
}
export interface ICountryModel extends ISharedModel {
    data: countryMdl[];
}
interface countryMdl {
    iso2: string;
    iso3: string;
    country: string;
}

interface ISharedModel {
    error: boolean;
    msg: string;
}