import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { GetStatusQuery } from '../generated/graphql/graphql';
import { FlagCircle, HelpOutline, LightbulbCircle } from '@mui/icons-material';

const STATUS_ICONS: Record<string, React.ReactNode> = {
  flag: <FlagCircle />,
  lights: <LightbulbCircle />,
};

const Status = ({ status }: { status?: GetStatusQuery['status'] }) => {
  const listItems = useMemo(
    () =>
      status
        ? Object.entries(status).map(([key, value]) => (
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
    [status],
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
