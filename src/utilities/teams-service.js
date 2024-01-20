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