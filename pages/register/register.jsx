import React, { useState } from "react";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar/Navbar";

// styles
import styles from "./register.module.scss";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    fetch("http://localhost:3000/register/register", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        router.push("/login/login");
      }
    });
  };

  return (
    <>
      <Navbar className={styles.navbar} />
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <h4>Welcome</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Register:</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="col-12 p-2"
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="col-12 mt-2 p-2"
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-6">
              <div className="row">
                <div className="col-1">
                  <input type="checkbox" className="mr-5" />
                </div>
                <div className="col">
                  <label className="ml-5">Remember me</label>
                </div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <p>Forgot password?</p>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default register;
