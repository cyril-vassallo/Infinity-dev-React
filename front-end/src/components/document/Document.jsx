import React from 'react';


function Document(props) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h3 className="text-success">{props.document.title}</h3>
          </div>
        </div>
        <div className="row my-5 document">
          <div className="col-md-6 my-3">
           <img src={"img/miniatures/"+ props.document.miniature} alt=""/>
          </div>
          <div className="col-md-6 my-3">
            <div className="row description">
              <div className="col">
                <p>{props.document.description}</p>
              </div>
            </div>
            <div className="row self-end">
              <div className="col text-center">
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
        </div>
      </div>
    );
    
}

export default Document;