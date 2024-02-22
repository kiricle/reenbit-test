export const isSelected = (trip1: Trip, trip2: Trip) =>
    trip1.city === trip2.city &&
    trip1.startDate.getTime() === trip2.startDate.getTime() &&
    trip1.endDate.getTime() === trip2.endDate.getTime();
