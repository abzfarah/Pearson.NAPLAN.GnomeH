import React from 'react';

import Box from '../components/common/Box';
import SpinningIcon from '../components/common/icons/Spinning';

const Loading = () => {
  return (
    <Box pad='large' align="center" justify="center">
      <SpinningIcon />
    </Box>
  );
};

export default Loading;
