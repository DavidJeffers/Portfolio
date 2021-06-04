import React from 'react';
import {useState} from 'react';
import "/Users/davidjeffers/Desktop/Portfolio/portfolio/src/App.css";

import * as emailjs from 'emailjs-com';

import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'DavidJ Jeffers',
      subject,
      message_html: message,
    };
    emailjs.send(
      'service_3jci99l',
      'template_ulkr2v9',
       templateParams,
      'user_P45LdDAHh1FkV1EqCVc64'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (  <div className='formbox' id="contact"> 
      <form className="" onSubmit={this.handleSubmit}>
        <div className="box"> 
        <Field className="name">
          <Label>Name</Label>
          <Control>
            <Input className="nameInput"
              name="name"
              type="text"
              placeholder="Your first and last name"
              value={name}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field className="email">
          <Label>Email for contact</Label>
          <Control>
            <Input
              name="email"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field className="subject">
          <Label>Subject</Label>
          <Control>
            <Input
              name="subject"
              type="text"
              placeholder="What is the subject?"
              value={subject}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field className="message">
          <Label>Message</Label>
          <Control>
            <Textarea
              name="message"
              placeholder="Tell me more about..."
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>

        <Field kind="group">
          <Control>
            <Button className="send" color="dark">Send</Button>
          </Control>
          <Control>
            <Button className="cancel" text>Cancel</Button>
          </Control>
        </Field> </div>
      </form> </div> )
  }
}

export default Contact;