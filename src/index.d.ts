interface TodayForecast {
    days: [
        {
            temp: number;
        }
    ];
}

interface WeekForecast {
    days: Array<WeekForecastDay>;
}

interface WeekForecastDay {
    tempmax: number;
    tempmin: number;
    datetime: string;
}

interface Trip {
    city: string;
    startDate: Date;
    endDate: Date;
}
