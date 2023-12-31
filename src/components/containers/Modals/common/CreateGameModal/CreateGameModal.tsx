'use client';

import React from 'react';
import useModalStore from '@/stores/ui/useModalStore';
import { Form } from '@/components/ui/Form/Form';
import FormFieldSelect from '@/components/ui/Form/FormField/FormFieldSelect';
import { z } from 'zod';
import useValidation from '@/hooks/forms/useValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LOCAL_STORAGE_KEYS from '@/constants/localStorage';
import useGetTimeControls from '@/clientApi/queries/timeControls';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';
import useCreateGame from '@/clientApi/mutations/game/createGame';
import { getLocalStorageItem } from '@/lib/localstorage';
import Modal from '../../templates/Modal/Modal';

function CreateGameModal() {
  const { data } = useGetTimeControls();

  const timeControlOptions = data?.map((timeControl) => ({
    label: formatSecondsToMinutesAndSeconds(timeControl.initial_time || 0),
    value: `${timeControl.initial_time}`,
  }));

  const { mutate, isPending: isLoading } = useCreateGame();

  const { createGame: createGameModal } = useModalStore();

  const { fieldSelectRequired } = useValidation();

  const FormSchema = z.object({
    timeControl: fieldSelectRequired,
  });

  type ValidationSchema = z.infer<typeof FormSchema>;

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (values) => {
    const userId =
      getLocalStorageItem<string>(LOCAL_STORAGE_KEYS.USER_ID) || '';

    const payload = {
      playerId: userId,
      timeControl: values.timeControl,
    };

    mutate(payload);
  };

  return (
    <Modal
      handleOpenChange={createGameModal.handleOpenChange}
      details={{
        title: 'Create new game',
        description: 'Please select a time control for your new game.',
      }}
      cancelAction={{
        onClick: () => createGameModal.close(),
      }}
      submitAction={{
        onClick: form.handleSubmit(onSubmit),
        isLoading,
        label: 'Create',
      }}
      isOpen={createGameModal.isOpen}
      size='sm'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormFieldSelect
            name='timeControl'
            control={form.control}
            options={timeControlOptions}
            placeholder='Time control'
          />
        </form>
      </Form>
    </Modal>
  );
}

export default CreateGameModal;
