import React, { useMemo } from 'react';
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import { GetConfigurationQuery } from '../generated/graphql/graphql';

const Controls = ({
  configuration,
  onClickLower,
  onClickHalf,
  onClickRaise,
  onClickLightsOff,
  onClickLightsOn,
}: {
  onClickLower: () => void;
  onClickHalf: () => void;
  onClickRaise: () => void;
  onClickLightsOn: () => void;
  onClickLightsOff: () => void;
  configuration?: GetConfigurationQuery['configuration'];
}) => {
  const motorControls = useMemo(
    () =>
      configuration?.hasMotor ? (
        <>
          <Typography>Flag</Typography>
          <ButtonGroup variant="contained" aria-label="flag controls" fullWidth>
            <Button onClick={onClickLower}>Lower</Button>
            <Button onClick={onClickHalf}>Half Staff</Button>
            <Button onClick={onClickRaise}>Raise</Button>
          </ButtonGroup>
        </>
      ) : null,
    [configuration?.hasMotor, onClickHalf, onClickLower, onClickRaise],
  );

  const lightControls = useMemo(
    () =>
      configuration?.hasLights ? (
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
    [configuration?.hasLights, onClickLightsOff, onClickLightsOn],
  );

  const content = useMemo(() => {
    if (!motorControls && !lightControls) {
      return (
        <Alert severity="info">
          Your current configuration does not allow for any manual controls.
        </Alert>
      );
    }

    return (
      <Stack spacing={2}>
        {motorControls}
        {lightControls}
      </Stack>
    );
  }, [motorControls, lightControls]);

  return (
    <Card>
      <CardHeader title="Controls" />
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default Controls;
