import React from 'react';

function TextField(props) {
    return (
      <div className="form-group">
        <label htmlFor="name">Votre nom / société</label>
        <input
          id="name "
          class="form-control"
          type="text"
          placeholder="saisissez votre nom "
        />
      </div>
    );
    
}

export default TextField;