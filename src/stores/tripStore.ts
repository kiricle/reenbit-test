import { create } from 'zustand';

type State = {
    currentTrip: Trip
};

type Actions = {
    setTrip: (trip: Trip) => void 
}

export const useTripStore = create<State & Actions>((set) => ({
    currentTrip: {
        city: 'Berlin',
        startDate: new Date(Date.now() + 86400000 * 4),
        endDate: new Date(Date.now() + 86400000 * 10)
    },
    setTrip: (trip) => set(() => ({currentTrip: trip}))
}));
