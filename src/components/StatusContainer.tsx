import React, { useEffect } from 'react';
import { useGetStatusQuery } from '../generated/graphql/graphql';
import Status from './Status';

const StatusContainer = () => {
  const { data, startPolling, stopPolling } = useGetStatusQuery();

  useEffect(() => {
    startPolling(500);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

  return <Status status={data?.status} />;
};

export default StatusContainer;
