import React, { useEffect, useState } from "react";
import { init, send } from "emailjs-com";

import { Button } from "@material-ui/core";

import { Container } from "./styles";
import Input from "../../components/Input";
import Letter from "../../components/Letter";
import { colors } from "../../globalStyles";

export default function ContactPage() {
  // const [width, height] = useWindowSize();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  useEffect(() => {
    init("user_tmdEgBJqW6sZVM5GBo1ns");
  }, []);

  useEffect(() => {
    setValidName(name.length > 0);
  }, [name]);

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  useEffect(() => {
    setValidMessage(message.length > 0);
  }, [message]);

  function validateEmail(value) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.match(reg)) setValidEmail(true);
    else setValidEmail(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const variables = {
      reply_to: email,
      from_name: name,
      message_html: message
    };
    if (validName && validEmail && validMessage) sendEmail(variables);
    setName("");
    setEmail("");
    setMessage("");
  }

  function sendEmail(variables) {
    send("gmail", "template_KLCcnygR", variables)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="title">
          {"Entre em contato".split("").map((c, i) => (
            <Letter
              key={String(i)}
              index={i}
              color={colors.letterColor}
              defaultColor={colors.letterColor}
            >
              {c}
            </Letter>
          ))}
        </div>
        <div className="row">
          <Input
            className="input"
            value={name}
            onChange={event => setName(event.target.value)}
            valid={validName}
            placeholder="Name"
          />
          <Input
            className="input"
            value={email}
            onChange={event => setEmail(event.target.value)}
            valid={validEmail}
            placeholder="Email"
          />
        </div>
        <Input
          className="full input"
          value={message}
          onChange={event => setMessage(event.target.value)}
          valid={validMessage}
          placeholder="Message"
          multiline
        />
        <Button type="submit" variant="outlined" className="submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
}
