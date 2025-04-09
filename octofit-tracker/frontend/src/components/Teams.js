import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://ideal-invention-rj74gxqp9pfwjpp-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Teams</h1>
      <div className="row">
        {teams.map(team => (
          <div className="col-md-4" key={team._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text">Members: {team.members.length}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
