export function loadStateFromStorage() {
  let teams = JSON.parse(localStorage.getItem('teams'));
  if (teams === null) {
    teams = getInitialTeams();
    setStateInStorage({ teams });
  }
  return { teams };
}

export function setStateInStorage({ teams }) {
  localStorage.setItem('teams', JSON.stringify(teams));
}

export function getInitialTeams() {
  const numTeams = 14;
  const teams = new Array(numTeams).fill(null)
    .map((_, idx) => ({
      num: idx + 1,
      player1: '',
      player2: '',
      owners: '',
      bid: 0,
      payouts: [0, 0, 0],
      locked: false
    }));
  return teams;
}