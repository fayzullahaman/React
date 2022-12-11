const handleSubmit = async (e) => {
  e.preventDefault();
  await axios
    .get("http://localhost/wdpf51_React/reactloginauth/api/login.php", {
      params: { email, password },
    })
    .then((res) => {
      // console.log(res.data);
      if (res.data.success) {
        const token = { token: res.data.msg };
        setToken(token);
        window.location.href = "/dashboard";
      }
    });
};

// if ($result->num_rows === 1) {
//   echo json_encode(['success' => true, 'msg' => 'Login Success']);
//   return;
// } else {
//   echo json_encode(['success' => false, 'msg' => 'Email or password incorrect']);
//   return;
// }

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
