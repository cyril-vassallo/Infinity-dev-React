import React from 'react';

function Textarea(props) {
    return (
      <div class="form-group">
        <label for="message">Votre message</label>
        <textarea
        placeholder="255 caractères maximum"
          class="form-control"
          id="message"
          rows="3"
          maxLength="255"
        ></textarea>
      </div>
    );
    
}

export default Textarea;