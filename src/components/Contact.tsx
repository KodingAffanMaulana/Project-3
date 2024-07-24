import React, { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

class FormValidator {
  static validate(form: ContactForm): string[] {
    const errors: string[] = [];
    if (!form.name) {
      errors.push('Name is required');
    }
    if (!form.email) {
      errors.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.push('Email is invalid');
    }
    if (!form.message) {
      errors.push('Message is required');
    }
    return errors;
  }
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = FormValidator.validate(form);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess(null);
    } else {
      // Simulate a successful submission
      setSuccess('Message sent successfully!');
      setErrors([]);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="contact__input"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            className="contact__input"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="contact__button button">Submit</button>
        </form>
        {errors.length > 0 && (
          <div className="contact__errors">
            {errors.map((error, index) => (
              <p key={index} className="contact__error">{error}</p>
            ))}
          </div>
        )}
        {success && (
          <div className="contact__success">
            <p>{success}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
