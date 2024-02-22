import { create } from 'zustand';
import BerlinImage from '../assets/berlin.jpg';
import TokyoImage from '../assets/tokyo.jpg';

type State = {
    currentTrip: Trip;
    cities: City[];
    userTrips: Array<Trip & City>;
};

type Actions = {
    setTrip: (trip: Trip) => void;
    addTrip: (cityName: string, startDate: Date, endDate: Date) => void;
};

export const useTripStore = create<State & Actions>((set) => ({
    currentTrip: {
        city: 'Berlin',
        src: BerlinImage,
        startDate: new Date(Date.now() + 86400000 * 4),
        endDate: new Date(Date.now() + 86400000 * 10),
    },
    cities: [
        {
            city: 'Berlin',
            src: BerlinImage,
        },
        {
            city: 'Tokyo',
            src: TokyoImage,
        },
    ],
    userTrips: [
        {
            city: 'Berlin',
            src: BerlinImage,
            startDate: new Date(Date.now() + 86400000 * 4),
            endDate: new Date(Date.now() + 86400000 * 10),
        }
    ],
    setTrip: (trip) => set(() => ({ currentTrip: trip })),
    addTrip: (cityName, startDate, endDate) =>
        set((state) => {
            const city = state.cities.find(({ city }) => cityName === city);

            if (city === undefined) {
                return state;
            }

            return {
                userTrips: [
                    ...state.userTrips,
                    {
                        ...city,
                        startDate,
                        endDate,
                    },
                ],
            };
        }),
}));
