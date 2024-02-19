interface TodayForecast {
    days: [
        {
            temp: number;
        }
    ];
}

interface Trip {
    city: string;
    startDate: Date;
    endDate: Date;
}
