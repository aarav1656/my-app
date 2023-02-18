import { useState } from 'react';

function ProfilePage() {
  const [profileImg, setProfileImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdWb1ktIPatHBnlioCgJ42yMeh6WYe6xOAW-gxtXtOKaswlf1qm0qLF419Y9SmWgV7yg&usqp=CAU');
  const [numBetsWon, setNumBetsWon] = useState(10);
  const [reputationScore, setReputationScore] = useState(303);

  return (
    <div className="profile-container">
      <div className="profile-img-container">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
      <div className="profile-stats-container">
        <div className="profile-stat">
          <div className="stat-value">{numBetsWon}</div>
          <div className="stat-label">Bets Won</div>
        </div>
        <div className="profile-stat">
          <div className="stat-value">{reputationScore}</div>
          <div className="stat-label">Reputation Score</div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;