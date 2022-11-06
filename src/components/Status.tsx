import React, { useEffect, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useGetStatusQuery } from '../generated/graphql/graphql';
import { FlagCircle, HelpOutline, LightbulbCircle } from '@mui/icons-material';

const STATUS_ICONS: Record<string, React.ReactNode> = {
  flag: <FlagCircle />,
  lights: <LightbulbCircle />,
};

const Status = () => {
  const { data, startPolling, stopPolling } = useGetStatusQuery();

  useEffect(() => {
    startPolling(500);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

  const listItems = useMemo(
    () =>
      data?.status
        ? Object.entries(data.status).map(([key, value]) => (
            <ListItem key={key} secondaryAction={value || 'UNKNOWN'}>
              <ListItemIcon>
                {STATUS_ICONS[key] || <HelpOutline />}
              </ListItemIcon>
              <ListItemText>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </ListItemText>
            </ListItem>
          ))
        : [],
    [data],
  );

  return (
    <Card>
      <CardHeader title="Status" />
      <CardContent>
        <List>{listItems}</List>
      </CardContent>
    </Card>
  );
};

export default Status;
