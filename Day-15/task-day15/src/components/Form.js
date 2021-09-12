import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Form(props) {
  const [data, setData] = useState({
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  });

  const [errorNama, setErrorNama] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const suratKesungguhan = useRef(null);

  const namaValidator = /^[A-Za-z]*$/;
  const emailValidator =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneValidator = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/;

  const handleChange = (event) => {
    console.log(event.target.name);
    const newBaseData = {
      ...data,
      [event.target.name]: event.target.value,
    };
    setData(newBaseData);

    if (event.target.name === "nama") {
      setData(event.target.value);
      if (!namaValidator.test(event.target.value)) {
        setErrorNama("Nama lengkap harus berupa huruf");
      } else {
        setErrorNama("");
      }
    }

    if (event.target.name === "email") {
      setData(event.target.value);
      if (!emailValidator.test(event.target.value)) {
        setErrorEmail("Email tidak sesuai");
      } else {
        setErrorEmail("");
      }
    }

    if (event.target.name === "noHandphone") {
      setData(event.target.value);
      if (!phoneValidator.test(event.target.value)) {
        setErrorPhone("No Handphone tidak sesuai");
      } else {
        setErrorPhone("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({
      nama: "",
      email: "",
      noHandphone: "",
      kelas: "",
      harapan: "",
      pendidikan: "",
    });
  };

  return (
    <div>
      <div className="form-container">
        <h2>Pendaftaran Peserta Coding Bootcamp</h2>
        <form onSubmit={handleSubmit}>
          <label>Nama lengkap:</label>
          <br />
          <input
            name="nama"
            type="text"
            value={data.nama}
            onChange={handleChange}
            className="input-form"
          ></input>
          {errorNama}
          <br />
          <br />
          <label>Email:</label>
          <br />
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            className="input-form"
          ></input>
          {errorEmail}
          <br />
          <br />
          <label>No Handphone:</label>
          <br />
          <input
            name="noHandphone"
            type="phone"
            value={data.noHandphone}
            onChange={handleChange}
            className="input-form"
          ></input>
          {errorPhone}
          <br />
          <br />
          <label>Latar belakang pendidikan:</label>
          <br />
          <input
            type="radio"
            name="pendidikan"
            value={data.pendidikan}
            onChange={handleChange}
          />
          IT
          <input
            type="radio"
            name="pendidikan"
            value={data.pendidikan}
            onChange={handleChange}
          />
          Non IT
          <br />
          <br />
          <label>Kelas coding yang dipilih:</label>
          <br />
          <select
            name="kelas"
            onChange={handleChange}
            defaultValue="Pilih salah satu program"
            className="input-form"
          >
            <option value="">Pilih salah satu program</option>
            <option value={data.kelas}>Coding Backend with Golang</option>
            <option value={data.kelas}>Coding Frontend with ReactJS</option>
            <option value={data.kelas}>Fullstack Developer</option>
          </select>
          <br />
          <br />
          <label>Foto surat kesungguhan:</label>
          <br />
          <input type="file" />
          <br />
          <br />
          <label>Harapan untuk coding bootcamp ini:</label>
          <br />
          <textarea
            rows="10"
            cols="40"
            className="input-form"
            name="harapan"
            value={data.harapan}
            onChange={handleChange}
          ></textarea>
          <br />
          <br />
          <button type="submit" className="button-form">
            Submit
          </button>
        </form>
      </div>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Form;

// {data.nama}
// <br />
// {data.email}
// <br />
// {data.noHandphone}
// <br />
