import React from "react";
import styles from "./styles.module.scss";
import Textarea from "./../../../ui/customTextarea/index";
import Input from "../../../ui/customInput";
import Modal from "../../modals";
import ModalHeader from "../../modals/modal-header";
import ModalButton from "../../modals/modal-button";
import changeEmailBody from "../../modals/change-email-body";

export default function AccountInfo() {
  const [changeEmail, setShowChangeEmail] = React.useState(false);
  const [changePassword, setShowChangePassword] = React.useState(false);

  return (
    <>
      <Modal
        {...{
          show: changePassword,
          setShow: setShowChangePassword,
          header: (
            <ModalHeader
              {...{
                text: "Change Password",
                subText:
                  "We'll send an email to luckyeonoriode@gmail.com containing a link to reset your password. Follow the instructions within it to continue.",
                handleModal: setShowChangePassword,
              }}
            />
          ),
          button: (
            <ModalButton
              {...{
                text: "Send reset link",
                handleModal: setShowChangePassword,
              }}
            />
          ),
        }}
      />

      <Modal
        {...{
          show: changeEmail,
          setShow: setShowChangeEmail,
          header: (
            <ModalHeader
              {...{
                text: "Change Email",
                subText:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo neque, nisi velit sed vel, tempus et, morbi. ",
                handleModal: setShowChangeEmail,
              }}
            />
          ),
          body: changeEmailBody,

          button: (
            <ModalButton
              {...{ text: "Update email", handleModal: setShowChangeEmail }}
            />
          ),
        }}
      />
      <section className={styles.wrapper}>
        {/* <form onSubmit={() => console.log("i am submitting the form.")}> */}
        <div className={styles.formGroup}>
          <aside className={styles.inputLeft}>
            <Input labelText="Full Name" type="text" name="text" />
          </aside>
          <aside className={styles.inputRight}>
            <Input
              labelText="Email Address"
              type={"email"}
              innerLabel
              name="email"
              clicked={() => {
                console.log("i have been clicked");
              }}
            >
              <span
                className={styles.change}
                onClick={() => setShowChangeEmail(true)}
              >
                Change
              </span>
            </Input>
          </aside>
        </div>

        <div className={`${styles.formGroup} ${styles.formGroupMargin}`}>
          <aside className={styles.inputLeft}>
            <Input
              labelText="Password"
              type={"password"}
              innerLabel
              name="password"
              clicked={() => {
                console.log("");
              }}
            >
              <span
                className={styles.change}
                onClick={() => setShowChangePassword(true)}
              >
                Change
              </span>
            </Input>
          </aside>
          <aside className={styles.inputRight}>
            <Input labelText="Role" type="text" name="role" />
          </aside>
        </div>

        <div className={` ${styles.formGroupMargin}`}>
          <aside>
            <Textarea labelText="About You" name="" />
          </aside>
        </div>
        {/* </form> */}
      </section>
    </>
  );
}
