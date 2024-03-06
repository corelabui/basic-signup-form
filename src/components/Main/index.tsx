import { Form, FormValues } from 'formfusion';

import Input from '../Input';
import Button from '../Button';

import logo from '/logo.svg';
import './main.css';

function Main() {
  function onSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div className="container">
      <a href="https://www.corelabui.com" target="_blank" className="logo">
        <img src={logo} className="logo__img" alt="CorelabUI logo" />
      </a>
      <Form onSubmit={onSubmit} validateOnChange className="form">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="youremail@domain.com"
          required
        />
        <Input
          id="username"
          name="username"
          type="username"
          label="Username"
          placeholder="jane"
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          required
        />
        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          label="Confirm password"
          required
        />
        <div className="form__action">
          <Input
            id="terms"
            name="terms"
            type="checkbox"
            label="Accept Terms & Conditions"
          />
        </div>
        <Button>Sign up</Button>
      </Form>
    </div>
  );
}

export default Main;
