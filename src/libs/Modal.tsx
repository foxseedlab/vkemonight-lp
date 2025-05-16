import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useEffect, useRef } from 'react';
import Dismiss from './icons/Dismiss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (isOpen) {
      dialogNode?.showModal();
    } else {
      dialogNode?.close();
    }
    return () => {
      dialogNode?.close();
    };
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
            onClick={() => onClose()}
          />

          <motion.dialog
            ref={dialogRef}
            className="m-auto w-[calc(100%-2rem)] md:w-[42rem] bg-transparent fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClose={onClose}
            onCancel={onClose}
            onClick={handleBackdropClick}
            aria-labelledby={title ? 'modal-title' : undefined}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-row justify-between">
                <h3
                  id="modal-title"
                  className="pt-5 text-2xl text-white font-bold"
                >
                  {title}
                </h3>

                <button
                  type="button"
                  onClick={onClose}
                  className="mb-4 w-12 h-12 text-neutral-900 bg-white rounded-full
                    flex flex-col items-center justify-center cursor-pointer"
                  aria-label="モーダルを閉じる"
                >
                  <Dismiss />
                </button>
              </div>

              <div className="w-full bg-white rounded-2xl overflow-hidden">
                {children}
              </div>
            </motion.div>
          </motion.dialog>
        </>
      )}
    </AnimatePresence>
  );
}
