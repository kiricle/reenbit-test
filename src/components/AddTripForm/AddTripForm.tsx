import { DateInput } from '../../ui/DateInput/DateInput';
import { Select } from '../../ui/Select/Select';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import styles from './AddTripForm.module.scss';
import { useAddTripForm } from './hooks/useAddTripForm';

export const AddTripForm = ({
    close,
    visible,
}: {
    close: () => void;
    visible: boolean;
}) => {
    const {
        onSelectChange,
        cities,
        endDate,
        onChangeEndDate,
        onChangeStartDate,
        startDate,
        validateDateInputs,
        submit
    } = useAddTripForm(close);

    validateDateInputs();

    return (
        visible && (
            <ConfirmModal
                onClose={close}
                onSubmit={() => {
                   submit()
                }}
            >
                <form className={styles.form}>
                    <Select
                        onChange={onSelectChange}
                        options={cities.map((el) => ({
                            title: el.city,
                            value: el.city,
                        }))}
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
                        onChange={onChangeEndDate}
                        value={endDate}
                        required
                    />
                </form>
            </ConfirmModal>
        )
    );
};
