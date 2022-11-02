import React, { useCallback } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import { useAddRequestMutation } from '../generated/graphql/graphql';

const Controls = () => {
  const [addRequest] = useAddRequestMutation({
    refetchQueries: ['getRequests'],
  });

  const onClickLower = useCallback(
    () => addRequest({ variables: { input: { action: 'LOWER' } } }),
    [addRequest],
  );

  const onClickHalf = useCallback(
    () => addRequest({ variables: { input: { action: 'HALF' } } }),
    [addRequest],
  );

  const onClickRaise = useCallback(
    () => addRequest({ variables: { input: { action: 'RAISE' } } }),
    [addRequest],
  );

  const onClickLightsOn = useCallback(
    () => addRequest({ variables: { input: { action: 'LIGHTS', value: 1 } } }),
    [addRequest],
  );

  const onClickLightsOff = useCallback(
    () => addRequest({ variables: { input: { action: 'LIGHTS', value: 0 } } }),
    [addRequest],
  );

  return (
    <Card>
      <CardHeader title="Controls" />
      <CardContent>
        <Stack spacing={2}>
          <Typography>Flag</Typography>
          <ButtonGroup variant="contained" aria-label="flag controls" fullWidth>
            <Button onClick={onClickLower}>Lower</Button>
            <Button onClick={onClickHalf}>Half Staff</Button>
            <Button onClick={onClickRaise}>Raise</Button>
          </ButtonGroup>
          <Typography>Lights</Typography>
          <ButtonGroup
            variant="contained"
            aria-label="light controls"
            fullWidth
          >
            <Button onClick={onClickLightsOff}>Off</Button>
            <Button onClick={onClickLightsOn}>On</Button>
          </ButtonGroup>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Controls;
