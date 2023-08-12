import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

interface IAlertErrorProps {
  message?: string | null;
  onHandleClose: () => void;
}

export default function AlertError({
  message,
  onHandleClose,
}: IAlertErrorProps) {
  if (!!message) {
    return (
      <Box marginTop={2}>
        <Alert onClose={onHandleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Box>
    );
  }
}
