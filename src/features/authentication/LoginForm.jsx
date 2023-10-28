import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { login } from "../../services/apiAuth";
// import FormRowVertical from "../../ui/FormRowVertical";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault()

    if(!email || !password) return

    login({email, password})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div tyle={{margin: '1rem 0' }}>
      <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{margin: '2rem 0' }}>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button size="large">Login</Button>
      </div>
    </Form>
  );
}

export default LoginForm;
