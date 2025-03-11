import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Button,
  Alert
} from "reactstrap";
import Typography from "./Typography";

const Settings = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "NYA2025") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="content">
        <Card className="card-user" style={{ maxWidth: "400px", margin: "100px auto" }}>
          <CardHeader>
            <h5 className="title">Authentication Required</h5>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </FormGroup>
              {error && (
                <Alert color="danger">
                  Incorrect password. Please try again.
                </Alert>
              )}
              <Button color="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }

  return <Typography />;
};

export default Settings; 