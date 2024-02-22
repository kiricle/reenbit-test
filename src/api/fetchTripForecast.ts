export async function fetchTripForecast({
    city,
    startDate,
    endDate,
}: {
    city: string;
    startDate: Date;
    endDate: Date;
}): Promise<WeekForecast | undefined> {
    try {
        const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate.toISOString()}/${endDate.toISOString()}`;
        const FULL_URL = new URL(BASE_URL);
        FULL_URL.searchParams.set('key', import.meta.env.VITE_API_KEY);
        FULL_URL.searchParams.set('unitGroup', 'metric')
        FULL_URL.searchParams.set('contentType', 'json');

        const response = await fetch(FULL_URL);

        if (!response.ok) throw new Error('Something went wrong');

        const result: WeekForecast = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}
