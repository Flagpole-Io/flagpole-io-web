import React, { useCallback } from 'react';
import {
  useAddRequestMutation,
  useGetConfigurationQuery,
} from '../generated/graphql/graphql';
import Controls from './Controls';

const ControlsContainer = () => {
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

  return (
    <Controls
      configuration={configData?.configuration}
      onClickLower={onClickLower}
      onClickHalf={onClickHalf}
      onClickRaise={onClickRaise}
      onClickLightsOn={onClickLightsOn}
      onClickLightsOff={onClickLightsOff}
    />
  );
};

export default ControlsContainer;
