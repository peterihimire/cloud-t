import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { EditOutlined } from "@ant-design/icons";
import Circle from "react-circle";
import { useRouter } from "next/router";

const ProfileGraph = ({ hideFooter, hideProfileInfo, size }) => {
  const [metric, setMetric] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setMetric(60);
    }, 500);
  }, []);

  return (
    <div className={styles.profileGraph}>
      <div className={styles.graphBody}>
        <div>
          <Circle
            animate={true}
            animationDuration="1s"
            responsive={false}
            size={size}
            lineWidth="40"
            progress={metric}
            progressColor="#FF8662"
            bgColor="rgba(255, 134, 98, 0.2)"
            textColor="#fff"
            textStyle={{
              fontSize: "4rem",
              fontFamily: "Noto-Bold",
            }}
            percentSpacing={0}
            roundedStroke={true}
            showPercentage={true}
            showPercentageSymbol={true}
          />
        </div>

        {!hideProfileInfo && (
          <div className={styles.profileInfo}>
            <ul>
              <li className={styles.active}>
                <span>Basic Information</span>
              </li>
              <li className={styles.active}>
                <span>Location</span>
              </li>
              <li className={styles.active}>
                <span>Biography</span>
              </li>
              <li>
                <span>Upload Certification</span>
              </li>
              <li>
                <span>Employment History</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {!hideFooter && (
        <div className={styles.graphFooter}>
          <button
            className="btn-transparent"
            onClick={() => router.push("/user/settings")}
          >
            <EditOutlined />
            <span>COMPLETE PROFILE</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileGraph;
