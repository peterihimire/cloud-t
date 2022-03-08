import React from "react";
import styles from "./styles.module.scss";
import Comment from "../../ui/comment";
import Input from "../../ui/customInput";

const Discussion = () => {
  return (
    <div className={styles.discussion}>
      <div className={styles.wrapper}>
        <div className={styles.comments}>
          <Comment
            alt=""
            avatar="/images/comment1.png"
            name="Annie Maryanne"
            time="2 days ago"
            likes="1,120"
            dislikes="0"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat urna, sed penatibus vel nisl vitae vel consectetur bibendum. Mattis ornare vitae scelerisque dignissim lorem massa ultrices euismod bibendum. Tincidunt nisi morbi euismod donec praesent sagittis ultrices est. Faucibus adipiscing scelerisque faucibus phasellus risus sed. Eu maecenas luctus neque, cursus congue nunc. Sed eget et aliquet nam nunc tellus, ornare ullamcorper. Sit accumsan tortor, tempus sit."
          />

          <Comment
            alt=""
            avatar="/images/comment2.png"
            name="Sonia Clintinste"
            time="2 days ago"
            likes="1,120"
            dislikes="0"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat urna, sed penatibus vel nisl vitae vel consectetur bibendum. Mattis ornare vitae scelerisque dignissim lorem massa ultrices euismod bibendum. Tincidunt nisi morbi euismod donec praesent sagittis ultrices est. Faucibus adipiscing scelerisque faucibus phasellus risus sed. Eu maecenas luctus neque, cursus congue nunc. Sed eget et aliquet nam nunc tellus, ornare ullamcorper. Sit accumsan tortor, tempus sit."
          />

          <Comment
            alt=""
            avatar="/images/comment3.png"
            name="Lambert Nelson"
            time="2 days ago"
            likes="1,120"
            dislikes="0"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat urna, sed penatibus vel nisl vitae vel consectetur bibendum. Mattis ornare vitae scelerisque dignissim lorem massa ultrices euismod bibendum. Tincidunt nisi morbi euismod donec praesent sagittis ultrices est. Faucibus adipiscing scelerisque faucibus phasellus risus sed. Eu maecenas luctus neque, cursus congue nunc. Sed eget et aliquet nam nunc tellus, ornare ullamcorper. Sit accumsan tortor, tempus sit."
          >
            <Comment
              alt=""
              avatar="/images/comment4.png"
              name="Keil Marshall"
              time="2 days ago"
              likes="1,120"
              dislikes="0"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat urna, sed penatibus vel nisl vitae vel consectetur bibendum. Mattis ornare vitae scelerisque dignissim lorem massa ultrices euismod bibendum. Tincidunt nisi morbi euismod donec praesent sagittis ultrices est. Faucibus adipiscing scelerisque faucibus phasellus risus sed. Eu maecenas luctus neque, cursus congue nunc. Sed eget et aliquet nam nunc tellus, ornare ullamcorper. Sit accumsan tortor, tempus sit."
            />
          </Comment>

          <Comment
            alt=""
            avatar="/images/comment5.png"
            name="Toby Marshall"
            time="2 days ago"
            likes="1,120"
            dislikes="0"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat urna, sed penatibus vel nisl vitae vel consectetur bibendum. Mattis ornare vitae scelerisque dignissim lorem massa ultrices euismod bibendum. Tincidunt nisi morbi euismod donec praesent sagittis ultrices est. Faucibus adipiscing scelerisque faucibus phasellus risus sed. Eu maecenas luctus neque, cursus congue nunc. Sed eget et aliquet nam nunc tellus, ornare ullamcorper. Sit accumsan tortor, tempus sit."
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.avatar}>
            <img alt="" loading="lazy" src="/images/comment6.png" />
          </div>

          <div className={styles.formGroup}>
            <Input
              id="comment"
              name="comment"
              placeholder="Write your comment here"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
