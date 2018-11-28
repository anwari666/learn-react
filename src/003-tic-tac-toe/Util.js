class Util {

  static calculateWinner( squares ){
    const winLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
  ]

    for (var i = winLines.length - 1; i >= 0; i--) {
      
      const [ a,b,c ] = winLines[i];

      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
        return squares[a];
    }

    return null;
  }
}


export default Util;