import { useInput } from '../../../hooks/useInput';
import { useTripStore } from '../../../stores/tripStore';

export const useAddTripForm = (close: ()=>void) => {
    const [selected, onSelectChange] = useInput('Please select a city');
    const [startDate, onChangeStartDate, setStartDate] = useInput('');
    const [endDate, onChangeEndDate, setEndDate] = useInput('');
    const cities = useTripStore((state) => state.cities);
    const addTrip = useTripStore((state) => state.addTrip);

    const validateDateInputs = () => {
        if (startDate !== '' && endDate !== '') {
            const ONE_DAY = 86400000;
            const startingDate = new Date(startDate);
            const endingDate = new Date(endDate);

            if (startingDate.getTime() - endingDate.getTime() > 0) {
                alert(
                    'The beginning of the trip should be earlier than the end'
                );
                setStartDate('');
                setEndDate('');
            }

            if (
                startingDate.getTime() < Date.now() ||
                startingDate.getTime() > Date.now() + ONE_DAY * 15
            ) {
                alert('The start date should be within the next 15 days');
                setStartDate('');
            }

            if (endingDate.getTime() - startingDate.getTime() > ONE_DAY * 15) {
                alert('The end date should be within the next 15 days');
                setEndDate('');
            }
        }
    };

    const submit = () => {
        if (selected === '') {
            alert('You should choose city');
            return;
        }
        addTrip(selected, new Date(startDate), new Date(endDate));
        setStartDate('');
        setEndDate('');
        close();
    }

    return {
        selected,
        onSelectChange,
        cities,
        addTrip,
        startDate,
        endDate,
        onChangeStartDate,
        setStartDate,
        onChangeEndDate,
        setEndDate,
        validateDateInputs,
        submit
    };
};
