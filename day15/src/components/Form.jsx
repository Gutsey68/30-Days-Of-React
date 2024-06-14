import { useState } from 'react';
import { MdFormatAlignCenter } from 'react-icons/md';
import validator from 'validator';

function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};

    if (validator.isEmpty(username)) {
      newErrors.username = 'Username is required';
    }
    if (!validator.isEmail(email)) {
      newErrors.email = 'Valid email is required';
    }
    if (validator.isEmpty(password)) {
      newErrors.password = 'Password is required';
    }
    if (!validator.equals(password, confirmPassword)) {
      newErrors.confirmPassword = 'Passwords must match';
    }
    if (phone && !validator.isMobilePhone(phone)) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (birthdate && !validator.isDate(birthdate)) {
      newErrors.birthdate = 'Valid birthdate is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log({
        username,
        email,
        password,
        confirmPassword,
        phone,
        birthdate
      });
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'birthdate':
        setBirthdate(value);
        break;
      default:
        break;
    }
  };

  return (
    <form id="registrationForm" onSubmit={handleSubmit}>
      <h2>
        Form validation <MdFormatAlignCenter />
      </h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div>
        <label htmlFor="birthdate">Birthdate</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <span className="error">{errors.birthdate}</span>}
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default Form;
