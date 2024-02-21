import { useInput } from '../../hooks/useInput';
import { DateInput } from '../../ui/DateInput/DateInput';
import { Select } from '../../ui/Select/Select';
import styles from './AddTripForm.module.scss';

export const AddTripForm = () => {
    const [selected, onChange] = useInput('Please select a city');
    const [startDate, onChangeStartDate] = useInput('');

    return (
        <form className={styles.form}>
            {' '}
            <Select
                onChange={onChange}
                options={[
                    { title: 'Berlin', value: 'Berlin' },
                    { title: 'Dnipro', value: 'Dnipro' },
                ]}
                placeholder="Please select a city"
                label="Email"
                required
            />
            <DateInput
                label="Start Date"
                onChange={onChangeStartDate}
                value={startDate}
                required
            />
            <DateInput
                label="End Date"
                onChange={onChangeStartDate}
                value={startDate}
                required
            />
        </form>
    );
};
