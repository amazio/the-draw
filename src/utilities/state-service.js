export function loadStateFromStorage() {
  let teams = JSON.parse(localStorage.getItem('teams'));
  if (teams === null) {
    teams = getInitialTeams();
    setStateInStorage({ teams, buyInPot: 25000 });
  }
  const buyInPot = JSON.parse(localStorage.getItem('buyInPot'));
  return { teams, buyInPot };
}

export function setStateInStorage({ teams, buyInPot }) {
  localStorage.setItem('teams', JSON.stringify(teams));
  localStorage.setItem('buyInPot', JSON.stringify(buyInPot));
}

export function getInitialTeams() {
  const numTeams = 12;
  const teams = new Array(numTeams).fill(null)
    .map((_, idx) => ({
      num: idx + 1,
      player1: '',
      player2: '',
      owners: '',
      bid: '',
      payouts: [0, 0, 0],
      locked: false
    }));
  return teams;
}