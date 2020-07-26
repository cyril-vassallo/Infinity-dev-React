import React from "react";
import "./document.css";

function Document(props) {
  return (
    <div className="container document my-5">
      <div className="row">
        <div className="col title text-center">
          <h3>{props.document.title}</h3>
        </div>
      </div>
      <div className="row my-5">
        <div className="col my-3 text-center">
          <img src={"img/miniatures/" + props.document.miniature} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col my-3 text-center description">
          <p>{props.document.description}</p>
          <a
            href={"documents/" + props.document.fileName}
            className="btn btn-lg btn-success"
            type="button"
          >
            Consulter !
          </a>
        </div>
      </div>
    </div>
  );
}

export default Document;
