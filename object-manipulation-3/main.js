console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
var players = [
  {
    name: player1,
    hand: []
  },
  {
    name: player2,
    hand: []
  },
  {
    name: player3,
    hand: []
  },
  {
    name: player4,
    hand: []
  }
];

var deck = [];
var suit = ['spades', 'hearts', 'clubs', 'diamonds'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King'];

function shuffleDeck() {
  var cards = {};
  for (var i = 0; i < suit.length; i++) {
    for (var x = 0; x < rank.length; x++) {
      cards.suit = suit[i];
      cards.rank = rank[x];
      deck.push(cards);
      cards = {};
    }
  }
}
shuffleDeck();

var shuffled = _.shuffleDeck(deck);

function dealCards(player) {
  console.log(deck);
  for (var i = 0; i < 2; i++) {
    players.hand.push(shuffled[i]);
    shuffled.splice(0, 1);
  }
}

function dealToPlayers(playerList) {
  for (var i = 0; i < players.length; i++) {
    dealCards(players[i]);
  }
  return players;
}

function calculateHand(playerList) {
  dealToPlayers(players);
  var score = 0;
}
*/
