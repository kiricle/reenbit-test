export async function fetchTodayForecast(city: string): Promise<TodayForecast | undefined> {
    try {
        const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today`;
        const FULL_URL = new URL(BASE_URL);

        FULL_URL.searchParams.set('unitGroup', 'metric');
        FULL_URL.searchParams.set('include', 'days');
        FULL_URL.searchParams.set('key', import.meta.env.VITE_API_KEY);
        FULL_URL.searchParams.set('include', 'days');
        FULL_URL.searchParams.set('contentType', 'json');

        const response = await fetch(FULL_URL);

        if (!response.ok) throw new Error('Response error!');

        const result: TodayForecast = await response.json();

        console.log(result);

        return result;
    } catch (error) {
        console.error(error);
    }
}
