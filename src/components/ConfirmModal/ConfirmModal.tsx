import { createPortal } from 'react-dom';
import styles from './ConfirmModal.module.scss';
import { ReactNode } from 'react';
import { Button } from '../../ui/Button/Button';

export const ConfirmModal = ({
    onSubmit,
    onClose,
    children,
}: {
    onClose: () => void;
    onSubmit: () => void;
    children: ReactNode;
}) => {
    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.row}>
                    <h2 className={styles.title}>Create trip</h2>
                    <button onClick={onClose} className={styles.close}>X</button>
                </div>
                <div className={styles.content}>{children}</div>
                <div className={styles.buttons}>
                    <Button onClick={onClose} appearance="secondary">Cancel</Button>
                    <Button onClick={onSubmit} appearance="primary">Save</Button>
                </div>
            </div>
        </div>,
        document.body
    );
};
