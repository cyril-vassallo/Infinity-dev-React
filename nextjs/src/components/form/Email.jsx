import React from 'react';

function Email(props) {
    return (
      <div class="form-group">
        <label for="email">Votre adresse mail </label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Saisissez votre email"
        />
        <small id="emailHelp" class="form-text text-muted text-center">
          Votre email ne sera pas partagé avec d'autres personnes
        </small>
      </div>
    );
    
}

export default Email;