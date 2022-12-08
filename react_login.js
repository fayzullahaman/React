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
