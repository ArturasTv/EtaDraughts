'use client';

import React from 'react';
import FabGroup from '@/components/ui/FabGroup/FabGroup';
import ActiveGameFab from '@/components/containers/fabs/ActiveGameFab/ActiveGameFab';

function FabsOutlet() {
  return (
    <FabGroup>
      <ActiveGameFab />
    </FabGroup>
  );
}

export default FabsOutlet;
