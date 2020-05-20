import React from 'react';

const PersonDetails = () => (
  <div className="card text-white bg-primary border-danger person-details">
    <h4 className="card-header">R2-D2</h4>
    <div className="card-body">
      <div className="person-details-img-container">
        <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" alt="Planet" width="100" />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Gender</th>
            <td>n/a</td>
          </tr>
          <tr>
            <th scope="row">Birth year</th>
            <td>33BBY</td>
          </tr>
          <tr>
            <th scope="row">Eye color</th>
            <td>red</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PersonDetails;
