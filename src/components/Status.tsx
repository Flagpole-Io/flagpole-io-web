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
import { useGetStatusQuery } from '../generated/graphql/graphql';

const Status = () => {
  const { data, startPolling, stopPolling } = useGetStatusQuery();

  useEffect(() => {
    startPolling(500);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

  const tableRows = useMemo(
    () =>
      data?.status
        ? Object.entries(data.status).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </TableCell>
              <TableCell>{value || 'UNKNOWN'}</TableCell>
            </TableRow>
          ))
        : [],
    [data],
  );

  return (
    <Card>
      <CardHeader title="Status" />
      <CardContent>
        <Table>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Status;
