import React, { useEffect, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { useGetRequestsQuery } from '../generated/graphql/graphql';

const Requests = () => {
  const { data, startPolling, stopPolling } = useGetRequestsQuery({
    pollInterval: 500,
  });

  useEffect(() => {
    startPolling(1000);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

  const tableRows = useMemo(
    () =>
      data?.requests
        ?.filter((request) => !!request)
        .map(({ action, value }) => (
          <TableRow>
            <TableCell>{action}</TableCell>
            <TableCell>{value}</TableCell>
          </TableRow>
        )),
    [data],
  );

  return (
    <Card>
      <CardHeader title="Requests" />
      <CardContent>
        <Table>
          <TableBody>{React.Children.toArray(tableRows)}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Requests;
