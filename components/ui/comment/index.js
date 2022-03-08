import React from "react";
import styles from "./styles.module.scss";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const Comment = ({
  children,
  avatar,
  alt,
  name,
  time,
  text,
  likes,
  dislikes,
  wrapperClass,
}) => {
  return (
    <div className={`${styles.comment} ${wrapperClass ? wrapperClass : ""}`}>
      <div className={styles.avatar}>
        <img loading="lazy" alt={alt} src={avatar} />
      </div>

      <div className={styles.details}>
        <div className={styles.header}>
          <h4>{name}</h4>
          <span>{time}</span>
        </div>

        <div className={styles.commentText}>
          <p>{text}</p>
        </div>

        <div className={styles.footer}>
          <div className={styles.likes}>
            <LikeOutlined />
            <span className={styles.count}>{likes}</span>
          </div>
          <div className={styles.dislikes}>
            <DislikeOutlined />
            <span className={styles.count}>{dislikes}</span>
          </div>
          <button>REPLY</button>
        </div>

        <div className={styles.subComments}>{children}</div>
      </div>
    </div>
  );
};

export default Comment;
