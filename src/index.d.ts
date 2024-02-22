interface TodayForecast {
    days: [
        {
            temp: number;
            icon: string;
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
    icon: string;
}

interface Trip {
    city: string;
    src: string;
    startDate: Date;
    endDate: Date;
}

type City = {
    city: string;
    src: string;
};
