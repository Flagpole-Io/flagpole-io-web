import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  Switch,
} from '@mui/material';
import { useFormik } from 'formik';
import {
  useGetConfigurationQuery,
  useUpdateConfigurationMutation,
} from '../generated/graphql/graphql';

const Configuration = () => {
  const { data } = useGetConfigurationQuery();
  const [updateConfiguration] = useUpdateConfigurationMutation({
    refetchQueries: ['getConfiguration'],
  });

  const { handleSubmit, handleChange, values } = useFormik({
    enableReinitialize: true,
    initialValues: data?.configuration || {
      hasWeatherProofFlag: false,
      hasLights: true,
      hasMotor: false,
      pushoverApiToken: '',
      pushoverUserKey: '',
    },
    onSubmit: (validatedValues) => {
      updateConfiguration({
        variables: {
          input: validatedValues,
        },
      });
    },
  });

  return (
    <Card>
      <CardHeader title="Configuration" />
      <CardContent>
        <form id="configuration-form" onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl>
              <FormControlLabel
                name="hasWeatherProofFlag"
                control={
                  <Switch
                    checked={values.hasWeatherProofFlag}
                    onChange={handleChange}
                  />
                }
                label="All Weather Flag"
                labelPlacement="start"
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                name="hasLights"
                control={
                  <Switch checked={values.hasLights} onChange={handleChange} />
                }
                label="Has Lights"
                labelPlacement="start"
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                name="hasMotor"
                control={
                  <Switch checked={values.hasMotor} onChange={handleChange} />
                }
                label="Has Motor"
                labelPlacement="start"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="pushover-api-token">
                Pushover API Token
              </InputLabel>
              <Input
                id="pushover-api-token"
                name="pushoverApiToken"
                value={values.pushoverApiToken}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="pushover-user-key">
                Pushover User Key
              </InputLabel>
              <Input
                id="pushover-user-key"
                name="pushoverUserKey"
                value={values.pushoverUserKey}
                onChange={handleChange}
              />
            </FormControl>
          </FormGroup>
        </form>
      </CardContent>
      <CardActions>
        <Button type="submit" form="configuration-form">
          Save
        </Button>
      </CardActions>
    </Card>
  );
};

export default Configuration;
