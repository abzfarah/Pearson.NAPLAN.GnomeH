import React from 'react';

import Box from '../components/Box';
import SpinningIcon from '../components/icons/Spinning';

const Loading = () => {
  return (
    <Box pad='large' align="center" justify="center">
      <SpinningIcon />
    </Box>
  );
};

export default Loading;
