import React from "react";

export default function Post(props) {
  return (
    <section>
      <div className="post--content">
        <p className="post--title">{props.title}</p>
        <p className="post--description">{props.body}</p>
      </div>
    </section>
  );
}
