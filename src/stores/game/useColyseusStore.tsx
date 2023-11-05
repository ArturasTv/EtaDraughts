import { create } from 'zustand';
import { Client } from 'colyseus.js';

type Colyseus = {
  client: Client;
};

const useColyseusStore = create<Colyseus>()(() => {
  const client = new Client(
    String(process.env.NEXT_PUBLIC_COLYSEUS_SERVER_URL),
  );

  return {
    client,
  };
});

export default useColyseusStore;
