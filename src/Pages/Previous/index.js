import React from "react";
const matches = [
  {
    id: 1,
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    venue: "Wankhede Stadium, Mumbai",
    date: "2022-04-07",
    result: "Mumbai Indians won by 20 runs",
    team1Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyysrm6wY5uz24t_1BsC6AbrcYlfWowbR3hKu_PPsIIQ&s",
    team2Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ1uHa3_4lCNJfd4z1-Sn78qBM4-ibD9v9I4HwWI&s"
  },
  {
    id: 2,
    team1: "Royal Challengers Bangalore",
    team2: "Kolkata Knight Riders",
    venue: "M. Chinnaswamy Stadium, Bangalore",
    date: "2022-04-08",
    result: "Royal Challengers Bangalore won by 6 wickets",
    team1Logo: "https://pbs.twimg.com/media/EQtmN0fUcAAnCyu?format=jpg&name=small",
    team2Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0f-Xvq7-tgOiTJegsHn3Vj6-r-jYbgYJnnpeYv18w&s"
  },
  {
    id: 3,
    team1: "Sunrisers Hyderabad",
    team2: "Delhi Capitals",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    date: "2022-04-09",
    result: "Delhi Capitals won by 4 wickets",
    team1Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRlyXLHRGcSeGniWvej9mO2jmrFpo1Csx5BNZyqFiSA&s",
    team2Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9D3US0ca_MxY10wex4lu9WO71YCBPJtne_rTtnqOww&s"
  }
];

function Matches() {
  return (
    <div className="matches-container">
      {matches.map((match) => (
        <div key={match.id} className="match-card">
          <div className="team-logo-container">
            <img src={match.team1Logo} alt={match.team1} className="team-logo" />
            <span>vs</span>
            <img src={match.team2Logo} alt={match.team2} className="team-logo" />
          </div>
          <div className="match-info-container">
            <p>Venue: {match.venue}</p>
            <p>Date: {match.date}</p>
            <p>Result: {match.result}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Matches;