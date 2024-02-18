import { create } from 'zustand';

type State = {
    currentTrip: string
};

type Actions = {
    setTrip: (trip: string) => void 
}

export const useTripStore = create<State & Actions>((set) => ({
    currentTrip: 'Berlin',
    setTrip: (trip) => set(() => ({currentTrip: trip}))
}));
