import { ChangeEvent, useState } from 'react';

export const useInput = (initial: string) => {
    const [selected, setSelected] = useState(initial);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSelected(e.target.value);
    };

    return [selected, onChange, setSelected] as const;
};
