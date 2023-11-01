'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  dialogVariants,
} from '@/components/ui/Dialog/Dialog';
import React, { PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';
import ModalAction, {
  ModalActionProps,
} from './Partials/ModalAction/ModalAction';

type ModalDetails = {
  title: string;
  description?: string;
};

interface Props extends PropsWithChildren {
  isOpen: boolean;
  details: ModalDetails;
  handleOpenChange: (isOpen: boolean) => void;
  submitAction?: ModalActionProps;
  cancelAction?: ModalActionProps;
  deleteAction?: ModalActionProps;
  size?: VariantProps<typeof dialogVariants>['size'];
}

function Modal({
  isOpen,
  details,
  submitAction,
  cancelAction,
  deleteAction,
  children,
  handleOpenChange,
  size,
}: Props) {
  const { title, description } = details;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent size={size}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter className='gap-y-2'>
          {deleteAction && (
            <ModalAction
              variant='destructive'
              label='Delete'
              icon='trash'
              className='sm:mr-auto'
              {...deleteAction}
            />
          )}
          {cancelAction && (
            <ModalAction
              variant='secondary'
              label='Cancel'
              icon='cross'
              {...cancelAction}
            />
          )}
          {submitAction && (
            <ModalAction
              variant='default'
              label='Submit'
              icon='check'
              type='submit'
              {...submitAction}
            />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
