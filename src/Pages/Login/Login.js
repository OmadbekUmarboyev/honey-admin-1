import React from 'react'
import "./Login.css"
import vawe from "../../Assets/Images/Vectors.svg"
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { acLoading } from '../../Redux/Loading';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { acAdmin } from '../../Redux/Admin';
import { toast } from 'react-toastify';


export function Login() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const admin = useSelector((state) => state.admin);
  const onSubmit = (data) => {
    const { login, password, chek } = data;

    axios(
      "https://honey.pandashop.uz/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: admin.token,
        },
        data: {
          login,
          password,
        },
      },
      dispatch(acLoading(true))
      )
      .then((res) => {
        if (chek) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          dispatch(acLoading(false));
          dispatch(acAdmin(res.data));
          toast.success(res.response.data.message);
        } else {
          sessionStorage.setItem("admin", JSON.stringify(res.data));
          dispatch(acAdmin(res.data));
          dispatch(acLoading(false));
          toast.success(res.response.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(acLoading(false));
      });
  };

  return (
    <div id='login-page-container'>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input
          type="text"
          {...register("login")}
          placeholder="Username"
          required
          autoComplete="off"
          autoCapitalize="off"
        />
        <input
          {...register("password")}
          placeholder="Password"
          autoComplete="off"
          autoCapitalize="off"
          required
        />
        <div id='login-check-div'>
          <label>
            <input type="checkbox" {...register("chek")} />
            <span>Remeber me</span>
          </label>
          <a href="https://support.google.com/">
            Forgot password?
          </a>
        </div>
        <button id='submit-login-btn' type="submit" >
          Login
        </button>
      </form>
      <div id='login-bottom'>
        <img src={vawe} alt="" />
      </div>
    </div>
  )
}
