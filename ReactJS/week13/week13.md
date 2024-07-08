---
marp: true
theme: default
header: 'Implementasi Autentikasi dengan Redux'
footer: 'Taufiqurrahman'
paginate: true
---

## Implementasi Autentikasi

---

## Pendahuluan
- Pentingnya fitur autentikasi dalam aplikasi modern.
- Menggunakan Redux untuk mengelola state autentikasi.
- Tujuan:
  - Memahami konsep autentikasi dalam aplikasi.
  - Menerapkan fitur Login, Register, dan Logout dengan Redux.
  - Menyimpan data pengguna terdaftar di Local Storage dan menggunakan API.

---

## Struktur Aplikasi
- **Struktur Folder:**
  - `src/store`: File Redux (actions, reducers, store).
  - `src/components`: Komponen React.
  - `src/pages`: Halaman Login dan Register.
- **File Penting:**
  - `store/index.js`
  - `actions/authActions.js`
  - `reducers/authReducer.js`
  - `components/Login.js`
  - `components/LoginAPI.js`
  - `components/Register.js`
  - `components/Logout.js`

---

## Actions untuk Autentikasi
- **Definisi Actions:**
  - Objek JavaScript yang mengirimkan data dari aplikasi ke Redux store.

---

## Actions untuk Autentikasi
- **`src/store/actions/authActions.js`:**
  ```javascript
  export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
  ```

---

```javascript
  export const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    return {
      type: LOGIN_SUCCESS,
      payload: user,
    };
  };
  ```

---

```javascript
  export const logout = () => {
    localStorage.removeItem('user');
    return {
      type: LOGOUT_SUCCESS,
    };
  };
  ```

---

```javascript
  export const register = (user) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return {
      type: REGISTER_SUCCESS,
      payload: user,
    };
  };
  ```

---

## Reducer untuk Autentikasi
- **Definisi Reducer:**
  - Fungsi yang menentukan bagaimana state aplikasi berubah sebagai respons dari actions.

---

## Reducer untuk Autentikasi
- **Contoh `src/store/reducers/authReducer.js`:**
  ```javascript
  import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS } from '../actions/authActions';

  const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
  };
  ```

---

```javascript
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          user: null,
        };
  ```

---

```javascript
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };

  export default authReducer;
  ```

---

## Komponen Login
- **Deskripsi:**
  - Komponen untuk login pengguna.

---

## Komponen Login
- **Kode `src/components/Login.js`:**
  ```javascript
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { login } from '../store/actions/authActions';
  import { useNavigate } from 'react-router-dom';
  ```

---

```javascript
  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  ```

---

```javascript
    const handleSubmit = (e) => {
      e.preventDefault();
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        dispatch(login(user));
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    };
  ```

---

```javascript
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
  ```

---

```javascript
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  };

  export default Login;
  ```

---

## Komponen Register
- **Deskripsi:**
  - Komponen untuk registrasi pengguna baru.

---

## Komponen Register
- **Kode `src/components/Register.js`:**
  ```javascript
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { register } from '../store/actions/authActions';
  import { useNavigate } from 'react-router-dom';
  ```

---

```javascript
  const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  ```

---

```javascript
    const handleSubmit = (e) => {
      e.preventDefault();
      const user = { email, password };
      dispatch(register(user));
      navigate('/login');
    };

    return (
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
  ```

---

```javascript
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  };

  export default Register;
  ```

---

## Komponen Logout
- **Deskripsi:**
  - Komponen untuk logout pengguna.

---

## Komponen Logout
- **Kode `src/components/Logout.js`:**
  ```javascript
  import React from 'react';
  import { useDispatch } from 'react-redux';
  import { logout } from '../store/actions/authActions';
  import { useNavigate } from 'react-router-dom';
  ```

---

```javascript
  const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navigate('/login');
    };

    return <button className="logout" onClick={handleLogout}>Logout</button>;
  };

  export default Logout;
  ```

---

## Login Menggunakan API
- **Deskripsi:**
  - Komponen untuk login menggunakan API dari `https://fakestoreapi.com/users`.

---

## Login Menggunakan API
- **Kode `src/components/LoginAPI.js`:**
  ```javascript
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { login } from '../store/actions/authActions';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  ```

---

```javascript
  const LoginAPI = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  ```

---

```javascript
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.get('https://fakestoreapi.com/users');
        const users = response.data;
        const user = users.find((u) => u.email === email && u.password === password);
  ```

---

```javascript
        if (user) {
          dispatch(login(user));
          navigate('/');
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('An error occurred. Please try again later.');
      }
    };
  ```

---

```javascript
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login with API</h2>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
  ```

---

```javascript
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  };

  export default LoginAPI;


  ```

---

## Proteksi Rute dengan Autentikasi
- **Deskripsi:**
  - Mengamankan rute keranjang agar hanya bisa diakses oleh pengguna yang sudah login.

---

## Proteksi Rute dengan Autentikasi
- **Kode `src/App.js`:**
  ```javascript
  import React from 'react';
  import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  import ProductList from './components/ProductList';
  import CartIcon from './components/CartIcon';
  import Cart from './components/Cart';
  import Login from './components/Login';
  ```

---

```javascript
  import LoginAPI from './components/LoginAPI';
  import Register from './components/Register';
  import Logout from './components/Logout';
  import './App.css';

  const App = () => {
    const user = useSelector((state) => state.auth ? state.auth.user : null);
  ```

---

```javascript
    return (
      <Router>
        <div className="app">
          <header>
            <h1>Simple Store</h1>
            <nav>
              <Link to="/">Products</Link>
              <Link to="/cart">
                <CartIcon />
              </Link>
  ```

---

```javascript
              {user ? (
                <>
                  <span className="welcome-message">Welcome, {user.email}!</span>
                  <Logout />
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/login-api">Login with API</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
  ```

---

```javascript
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={user ? <Cart /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-api" element={<LoginAPI />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    );
  };

  export default App;
  ```

---

## CSS untuk Aplikasi
- **Deskripsi:**
  - Menambahkan styling untuk aplikasi menggunakan CSS.

---

## CSS untuk Aplikasi
- **Kode `src/index.css`:**
  ```css
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f8ff; /* Light blue background */
  }

  .app {
    text-align: center;
  }
  ```

---

```css
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #1e90ff; /* Dodger Blue */
    color: white;
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  header h1 {
    margin: 0;
  }
  ```

---

```css
  nav {
    display: flex;
    align-items: center;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .welcome-message {
    color: white;
    margin-right: 10px;
  }
  ```

---

```css
  .cart-icon {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cart-icon svg {
    color: white;
  }

  .cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 0.8em;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
  ```

---

```css
  .product-item {
    border: 1px solid #ddd;
    padding: 20px;
    width: 250px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    text-align: left;
  }

  .product-item img {
    width: 100%; /* Ensure images take up full width */
    height: 200px; /* Set a fixed height for uniformity */
    object-fit: cover; /* Ensure images cover the area */
    border-radius: 10px;
  }

  .product-item h3 {
    font-size: 1.2em;
    margin: 10px 0;
    color: #1e90ff; /* Dodger Blue */
  }
  ```

---

```css
  .product-item p {
    font-size: 0.9em;
    color: #555;
    height: 60px; /* Set a fixed height for descriptions */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-item h4 {
    font-size: 1.1em;
    color: #333;
  }

  .product-item button {
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    background-color: #1e90ff; /* Dodger Blue */
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }

  .product-item button:hover {
    background-color: #1c86ee; /* Slightly darker blue */
  }
  ```

---

```css
  form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  form h2 {
    margin-bottom: 20px;
    color: #1e90ff; /* Dodger Blue */
  }

  form div {
    margin-bottom: 15px;
    text-align: left;
  }

  form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  ```

---

```css
  form input {
    width: calc(100% - 22px); /* Adjust width to accommodate padding and border */
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box; /* Ensure padding and border are included in the width */
  }

  form button {
    width: 100%; /* Ensure button takes full width */
    padding: 10px;
    border: none;
    background-color: #1e90ff; /* Dodger Blue */
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 15px; /* Add margin to separate button from input fields */
  }

  form button:hover {
    background-color: #1c86ee; /* Slightly darker blue */
  }
  ```

---

```css
  .cart {
    padding: 20px;
  }

  .cart h2 {
    font-size: 1.5em;
    color: #1e90ff; /* Dodger Blue */
  }

  .cart ul {
    list-style-type: none;
    padding: 0;
  }

  .cart li {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #fff;
  }
  ```

---

```css
  .cart li img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }

  .cart li div {
    flex-grow: 1;
  }

  .cart li h3 {
    font-size: 1.2em;
    margin: 0 0 10px;
    color: #1e90ff; /* Dodger Blue */
  }

  .cart li p {
    margin: 0 0 10px;
    color: #555;
  }

  .cart li button {
    padding: 5px 10px;
    border: none;
    background-color: #1e90ff; /* Dodger Blue */
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 5px;
  }
  ```

---

```css
  .cart li button:hover {
    background-color: #1c86ee; /* Slightly darker blue */
  }

  button.logout {
    margin-left: 10px;
    padding: 10px 20

px;
    border: none;
    background-color: #ff6347; /* Tomato */
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button.logout:hover {
    background-color: #ff4500; /* OrangeRed */
  }
  ```

---

  - Implementasi autentikasi dalam aplikasi Redux.
  - Fitur Login, Register, dan Logout.
  - Proteksi rute keranjang agar hanya bisa diakses oleh pengguna yang sudah login.
  - Penyimpanan data pengguna di Local Storage dan penggunaan API.