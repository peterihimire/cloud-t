import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import TextArea from "../../ui/customTextarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const InquiryForm = () => {
  return (
    <div className={styles.form}>
      <h2>Fill the form</h2>

      <form>
        <div className={styles.formGroup}>
          <Input
            labelText="Full Name"
            required
            id="fullName"
            name="full_name"
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Business Email"
            required
            id="businessEmail"
            name="business_email"
            type="email"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Company Name"
            required
            id="company"
            name="company_name"
            type="text"
          />
        </div>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <Select
              labelText="Company Size"
              id="size"
              name="company_size"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select company size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </Select>
          </div>
          <div className={styles.formGroup}>
            <Input
              labelText="Your Role"
              id="role"
              name="role"
              type="text"
              placeholder="Product Designer"
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <Select
            labelText="Country"
            required
            name="country"
            defaultValue=""
            id="country"
          >
            <option value="" disabled>
              Select your country
            </option>
          </Select>
        </div>
        {/* use package for this phone input */}
        <div className={styles.formGroup}>
          <label htmlFor="phone">
            Phone Number <span style={{ color: "#ff8662" }}>*</span>
          </label>
          <PhoneInput
            country={"us"}
            // value={this.state.phone}
            // onChange={(phone) => this.setState({ phone })}
            dropdownClass="phone-drop"
            inputClass="phone-input"
            buttonClass="phone-drop-btn"
            placeholder=""
            inputProps={{ id: "phone", name: "phone_number" }}
            containerClass="phone-input-wrapper"
          />
        </div>
        <div className={styles.formGroup}>
          <TextArea labelText="Inquiry" required id="inquiry" name="inquiry" />
        </div>

        <div className={styles.submitBtn}>
          <button className="btn-primary btn-block">CONTACT SALES</button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
