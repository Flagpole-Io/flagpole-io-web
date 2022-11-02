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
  const [updateConfiguration] = useUpdateConfigurationMutation();

  const { handleSubmit, handleChange, values } = useFormik({
    enableReinitialize: true,
    initialValues: data?.configuration || {
      hasWeatherProofFlag: false,
      hasLights: true,
    },
    onSubmit: (validValues) =>
      updateConfiguration({
        variables: { input: { ...validValues, hasMotor: true } },
      }),
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
              <InputLabel htmlFor="pushover-code">Pushover Code</InputLabel>
              <Input id="pushover-code" />
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
