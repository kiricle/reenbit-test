import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../ui/Button/Button';
import styles from './ConfirmModal.module.scss';

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
                    <button
                        onClick={onClose}
                        className={styles.close}
                    >
                        X
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
                <div className={styles.buttons}>
                    <Button
                        onClick={onClose}
                        appearance="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                        appearance="primary"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
};
