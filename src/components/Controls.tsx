import React, { useCallback, useMemo } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import {
  useAddRequestMutation,
  useGetConfigurationQuery,
} from '../generated/graphql/graphql';

const Controls = () => {
  const { data: configData } = useGetConfigurationQuery();
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

  const motorControls = useMemo(
    () =>
      configData?.configuration?.hasMotor ? (
        <>
          <Typography>Flag</Typography>
          <ButtonGroup variant="contained" aria-label="flag controls" fullWidth>
            <Button onClick={onClickLower}>Lower</Button>
            <Button onClick={onClickHalf}>Half Staff</Button>
            <Button onClick={onClickRaise}>Raise</Button>
          </ButtonGroup>
        </>
      ) : null,
    [
      configData?.configuration?.hasMotor,
      onClickHalf,
      onClickLower,
      onClickRaise,
    ],
  );

  const lightControls = useMemo(
    () =>
      configData?.configuration?.hasLights ? (
        <>
          <Typography>Lights</Typography>
          <ButtonGroup
            variant="contained"
            aria-label="light controls"
            fullWidth
          >
            <Button onClick={onClickLightsOff}>Off</Button>
            <Button onClick={onClickLightsOn}>On</Button>
          </ButtonGroup>
        </>
      ) : null,
    [configData?.configuration?.hasLights, onClickLightsOff, onClickLightsOn],
  );

  return (
    <Card>
      <CardHeader title="Controls" />
      <CardContent>
        <Stack spacing={2}>
          {motorControls}
          {lightControls}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Controls;
