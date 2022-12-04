import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { GetRequestsQuery } from '../generated/graphql/graphql';
import { FlagCircle, HelpOutline, LightbulbCircle } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';

const TIMELINE_ICONS: Record<string, React.ReactNode> = {
  RAISE: <FlagCircle />,
  HALF: <FlagCircle />,
  LOWER: <FlagCircle />,
  LIGHTS: <LightbulbCircle />,
};

const Requests = ({
  requests,
}: {
  requests?: GetRequestsQuery['requests'];
}) => {
  const timelineItems = useMemo(
    () =>
      requests
        ?.filter((request) => !!request)
        .reverse()
        .map(({ action, value }, index) => (
          <TimelineItem>
            <TimelineOppositeContent mt={2}>{value}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={index === 0 ? 'success' : 'grey'}>
                {TIMELINE_ICONS[action] || <HelpOutline />}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent mt={2}>{action}</TimelineContent>
          </TimelineItem>
        )),
    [requests],
  );

  return (
    <Card>
      <CardHeader title="Requests" />
      <CardContent>
        <Timeline position="left">
          {React.Children.toArray(timelineItems)}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default Requests;
