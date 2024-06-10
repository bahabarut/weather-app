export interface IWeatherResultModel {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: ICureentModel,
    minutely: IMinutelyModel[],
    hourly: IHourlyModel[],
    daily: IDailyModel[]

}

interface ICureentModel {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    weather: IWeatherModel[]
}

interface IWeatherModel {
    id: number,
    main: string,
    description: string
    icon: string
}

interface IMinutelyModel {
    dt: number,
    precipitation: number,
}
interface IHourlyModel {
    dt: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    weather: IWeatherModel[],
    pop: number
}

interface IDailyModel {
    dt: number,
    sunrise: number,
    sunset: number,
    moonrise: number,
    moonset: number,
    moon_phase: number,
    summary: string,
    temp:ITemp,
    feels_like:IFeelsLike,
    pressure: number,
    humidity: number,
    dew_point: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    weather: IWeatherModel[],
    clouds: number,
    pop: number,
    uvi: number,
}

interface ITemp {
    day: number,
    min: number,
    max: number,
    night: number,
    eve: number,
    morn: number,
}
interface IFeelsLike {
    day: number,
    night: number,
    eve: number,
    morn: number,
}
