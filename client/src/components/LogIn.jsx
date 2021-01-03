import React from 'react';
import { Button, Icon, Form, Grid, Header, Segment } from 'semantic-ui-react';

const LogIn = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        Log-In to Trippy
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Log In
          </Button>
        </Segment>
        <p>or</p>
        <Segment stacked>
          <Button color="spotify" fluid size="large">
            <Icon name="spotify" /> Spotify
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LogIn;
