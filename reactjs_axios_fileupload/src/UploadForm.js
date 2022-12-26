import axios from "axios";
import React, { useState } from "react";

export default function UploadForm() {
  const [info, setInfo] = useState({
    user_name: "",
    name: "",
  });

  const [photoInfo, setPhotoInfo] = useState({
    file: "",
  });

  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  // console.log(info);

  const changePhoto = (e) => {
    setPhotoInfo({ file: e.target.files[0] });
  };
  // console.log(photoInfo);

  const submitHandle = (e) => {
    e.preventDefault();
    fileUpload();
  };

  const fileUpload = () => {
    let datas = new FormData();
    datas.append("mydata", JSON.stringify(info));
    datas.append("mydata1", photoInfo.file);
    axios
      .post(
        "http://localhost/React/reactjs_axios_fileupload/api/newupload.php",
        datas,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        alert(res.data.msg);
        // console.log(res.data.msg);
      });
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={submitHandle}>
        <label>User Name</label> <br />
        <input type="text" name="username" onChange={changeValue} />
        <br />
        <label>Name</label>
        <br />
        <input type="text" name="name" onChange={changeValue} />
        <br />
        <label>Photo</label>
        <br />
        <input type="file" name="photo" onChange={changePhoto} />
        <br />
        <br />
        <input type="submit" name="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
