
export default (function() {
  function getComputerMove() {
    const n = Math.floor(Math.random() * 3);
    
    return (
      n === 0 ? "rock" :
      n === 1 ? "paper" : 
      "scissors"
    );
  }

  function getResults(e) {
    const playerMove = e.target.dataset.move;
    const computerMove = getComputerMove();
    const draw = playerMove === computerMove;
    let winner = null; 
    
    if(!draw) {
      winner = getWinner(playerMove, computerMove);
    }

    return {
      playerMove,
      computerMove,
      draw,
      winner
    }
  }

  function getWinner(playerMove, computerMove) {
    return (
      playerMove == "rock" && computerMove == "scissors" ||
      playerMove == "scissors" && computerMove == "paper" ||
      playerMove == "paper" && computerMove == "rock" ?
      "player" : "computer"
    );
  }

  return {
    getResults
  }
})();
