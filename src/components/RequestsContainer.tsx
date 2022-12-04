import React, { useEffect } from 'react';
import { useGetRequestsQuery } from '../generated/graphql/graphql';
import Requests from './Requests';

const RequestsContainer = () => {
  const { data, startPolling, stopPolling } = useGetRequestsQuery({
    pollInterval: 500,
  });

  useEffect(() => {
    startPolling(1000);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

  return <Requests requests={data?.requests} />;
};

export default RequestsContainer;
