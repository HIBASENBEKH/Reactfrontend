
import React from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';

const EmployeeForm = () => {
  return (
    <Container>
      <h2>Employee Form</h2>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Designation" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Location" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Salary" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EmployeeForm;
