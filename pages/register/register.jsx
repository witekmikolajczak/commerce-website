import { style } from "@mui/system";
import React from "react";

import { Navbar } from "../../components/Navbar/Navbar";

// styles
import styles from "./register.module.scss";

const register = () => {
  return (
    <>
      <Navbar className={styles.navbar} />
      <div className={styles.content}>
        <form action="">
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
              <input className="col-12 p-2" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="col-12 mt-2 p-2"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-6">
              <input type="checkbox" />
              <label className="ml-5">Remember me</label>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <p>Forgot password?</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default register;
