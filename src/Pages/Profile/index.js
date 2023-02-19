import { useState } from 'react';
import { repScore } from '../../Components/Web3components/Interaction';

function ProfilePage() {
  
  const [reputationScore, setReputationScore] = useState(300);
  const getRepScore = async ()=>{
    return await repScore(); 
  }
  getRepScore().then((result)=>{setReputationScore(result)});

  const [numBetsWon, setNumBetsWon] = useState(10);
  const [proficPic,setProfilePic] = useState(`https://ipfs.io/ipfs/bafybeicicwxfceynoqhpv337ynakgiephbedb3ihafs5uq5zcfdhuhso3u/301.png`);
  return (
    <div className="profile-container">
      <div className="profile-img-container">
        <img src={proficPic} alt="Profile" className="profile-img" />
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