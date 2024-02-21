import { ChangeEvent, useState } from 'react';

export const useSelect = (initial: string) => {
    const [selected, setSelected] = useState(initial);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };

    return { selected, onChange } as const;
};
