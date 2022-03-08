import React, { useState } from "react";
import Input from "../../ui/customInput";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Form = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.loginForm}>
      <div className={styles.formLogo}>
        <Link href="/">
          <a>
            <img alt="Cloudtician" src="/images/Cloudtician Logo.svg" />
          </a>
        </Link>
      </div>

      <div className={styles.formLead}>
        <h2>Welcome Back !</h2>
        <p>
          Sign in to your cloudticians platform to access wide range of learning
          content
        </p>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <Input
            labelText="Email Address"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Password"
            type={`${showPass ? "text" : "password"}`}
            id="password"
            innerLabel
            name="password"
            clicked={() => {
              setShowPass(!showPass);
            }}
          >
            {!showPass ? (
              <EyeInvisibleOutlined style={{ fontSize: "20px" }} />
            ) : (
              <EyeOutlined style={{ fontSize: "20px" }} />
            )}
          </Input>

          <a href="/">Forgot Password?</a>
        </div>

        <div className={styles.formBtn}>
          <button
            className="btn-primary btn-block"
            onClick={() => router.push("/user/onboarding")}
          >
            LOG IN
          </button>
        </div>

        <div className={styles.formInfo}>
          <p>
            New to Cloudticians?{" "}
            <Link href="/register">
              <a>Create Account</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
