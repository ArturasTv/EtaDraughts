'use client';

import React from 'react';
import useModalStore from '@/stores/ui/useModalStore';
import { Form } from '@/components/ui/Form/Form';
import FormFieldSelect from '@/components/ui/Form/FormField/FormFieldSelect';
import { z } from 'zod';
import useValidation from '@/hooks/forms/useValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useGameLobby from '@/hooks/game/useGameLobby';
import Modal from '../../templates/Modal/Modal';

// TODO: Receive time control options from backend
const TimeControlOptions = [
  {
    label: '1:00',
    value: '60',
  },
  {
    label: '3:00',
    value: '180',
  },
  {
    label: '5:00',
    value: '300',
  },
  {
    label: '10:00',
    value: '600',
  },
];

function CreateGameModal() {
  const { createGame } = useGameLobby();

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
    const payload = {
      playerId: 'Player 1',
      timeControl: values.timeControl,
    };

    createGame(payload);

    createGameModal.close();
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
            options={TimeControlOptions}
            placeholder='Time control'
          />
        </form>
      </Form>
    </Modal>
  );
}

export default CreateGameModal;
