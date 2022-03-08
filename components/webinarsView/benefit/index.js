import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";

const benefit = () => {
  return (
    <div className={styles.benefit}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>Benefit for you to get</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dictum enim, suscipit suspendisse. Auctor aliquam accumsan diam sed
            cursus placerat semper nam. Venenatis dictumst viverra quis pulvinar
            molestie etiam adipiscing id. Egestas nullam est ac eget lorem
            massa. At nulla egestas magna potenti. Mi neque faucibus cras vitae
            duis cursus. Sodales aenean quis sit tristique elementum. In
            imperdiet scelerisque integer sit vel ut sapien. Interdum quam
            sapien, id non platea.
          </p>

          <p>
            Augue volutpat morbi vitae semper sed nunc lacus etiam ultrices.
            Pulvinar posuere turpis platea morbi suspendisse tempor egestas
            facilisi sed. Quis duis amet libero, tristique sed. Pellentesque
            pretium urna tincidunt lorem diam tortor porta nisl pharetra. Ut
            urna enim imperdiet eget interdum montes, id. Enim commodo vel massa
            sapien. Sit donec volutpat quam facilisis consectetur tortor neque.
            Vel ante aliquam vulputate etiam. Est lacinia mi felis porta. Lacus,
            arcu nunc, mauris lectus vitae, quam imperdiet in eget. Amet
            pulvinar facilisi lacinia consequat quam at erat dui. Malesuada
            interdum nunc tempus tincidunt.
          </p>

          <p>
            Ut id feugiat aliquam pharetra aliquet. Ultrices dolor cursus morbi
            lacus, tristique neque nisi. Quam ultrices ut faucibus duis
            ullamcorper. Sed suspendisse volutpat pharetra hac aliquet nibh.
            Ipsum vitae phasellus arcu cursus cursus. Mauris, id phasellus sed
            et laoreet dictum sed. Massa curabitur volutpat augue in. Placerat
            eu lectus felis massa duis. Quis curabitur varius non aliquet. In
            nulla nulla non tincidunt sociis curabitur. Vitae turpis mauris
            consectetur nisi vel. Pellentesque nisl malesuada laoreet sed
            pharetra quis at. In massa viverra quis tempus.
          </p>
        </div>

        <div className={styles.right}>
          <h2>Register Now</h2>

          <form>
            <div className={styles.formGroup}>
              <Input
                type="text"
                name="full_name"
                labelText="Full Name"
                required
                id="fullName"
              />
            </div>

            <div className={styles.formGroup}>
              <Input
                type="email"
                name="email"
                labelText="Email"
                required
                id="email"
              />
            </div>

            <div className={styles.formBtn}>
              <button className="btn-primary btn-block">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default benefit;
