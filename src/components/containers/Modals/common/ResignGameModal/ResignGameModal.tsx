'use client';

import React from 'react';
import useModalStore from '@/stores/ui/useModalStore';
import { MESSAGE_TYPES } from '@/constants/messages';
import useGame from '@/hooks/game/useGame';
import Modal from '../../templates/Modal/Modal';

function ResignGameModal() {
  const resignGame = useModalStore((state) => state.resignGame);
  const { activeGame } = useGame();

  const handleSubmit = () => {
    activeGame?.send(MESSAGE_TYPES.RESIGN);
    resignGame.close();
  };

  return (
    <Modal
      handleOpenChange={resignGame.handleOpenChange}
      details={{
        title: 'Resign Game',
        description: 'Are you sure you want to resign this game?',
      }}
      cancelAction={{
        onClick: () => resignGame.close(),
      }}
      submitAction={{
        onClick: () => handleSubmit(),
        variant: 'destructive',
        label: 'Resign',
        icon: 'flag',
      }}
      isOpen={resignGame.isOpen}
      size='sm'
    />
  );
}

export default ResignGameModal;
