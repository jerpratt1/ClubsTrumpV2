<template>
  <div>
    <div id="container">
      <div id="head">
      <h1>RULES</h1>
      <h2>4-7 Players <br> Standard 52 Card Deck Required</h2>
      </div>
      
      <div id="basic">
      <p>Length: 10 rounds</p>
      <p>Win Condition: Highest points at end of 10 rounds</p>
      <p>Ranks of Cards (Highest to Lowest):<br>(All Clubs in the following order), A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.</p>
      </div>

      <div id="hands">
      <p>Hand order for player count:
        <ul>
          <li>4-5 players: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1</li>
          <li>6 players: 6, 7, 8, 7, 6, 5, 4, 3, 2, 1</li>
          <li>7 players: 4, 5, 6, 7, 6, 5, 4, 3, 2, 1</li>
        </ul>
      </p>
      </div>
      
      <div id="deal">
      <h2>The Deal:</h2>
      <p>The deck is shuffled. The first dealer is chosen by dealing a card to each player, highest card begins the deal. All cards are returned to the deck and shuffled.</p>
      <p> The chosen dealer then deals one card at a time starting with the player to their left and proceeding clockwise. The dealer will stop when all players have the amount of cards for the respective round. Please refer to hand count for amount of players for deal amounts. After each round of play all cards are returned to the deck, shuffled, and the person to the left of the current dealer is the next dealer, proceeding the same way each round for ten total rounds.</p>
      </div>

      <div id="bid">
      <h2>The Bid:</h2>
      <p>Once all cards for the given round are dealt, each player will indicate how many hands they will win. A hand is won by the player with the highest card in the played suit, or highest trump card. The player to the left of the dealer will be the first to bid, continuing clockwise until all players have bid, including the dealer. Players may bid from 0 to the amount of cards they have in their hand at the beginning of the round. In order to ensure that not all players can fulfill their bid, the dealer may not call an amount that makes the sum of all bids equal to the amount of cards in their current hand. A bid may not be changed once it has been made. A round is considered a push if the sum of all bids are below the amount of cards in the current hand, or a fight if the sum of all bids is above the amount of cards in the current hand. </p>
      </div>

      <div id="play">
      <h2>The Play:</h2>
      <p>The player to the left of the dealer will play one of their cards (Must not lead with a card that is of the suit clubs, unless it is the only suit you have, or clubs have already been played). Proceeding clockwise each player will play their card for this hand. You must play a card of the suit that was initially played if you are able. Otherwise you may play an offsuit card. The player with the highest card of the initial suit played OR the player with the highest trump card will take that hand. </p>
      <p>The winner of that hand will now play a card and the hands will continue in this manner until all cards for this round are played. At the end of each round the score is compiled and the new dealer is to the left of the current dealer. </p>
      </div>

      <div id="score">
      <h2>Scoring: </h2>
      <p>A point is awarded for each hand a player took during a given round. If a player took the same amount of hands that they bid at the beginning of the round they are awarded an additional 10 points. The winner of the game is the player with the highest points at the end of the 10 rounds.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li{
  list-style: none;
}

#container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 
  "head head head head"
  "basic basic hands hands"
  "deal bid play score"
  "deal bid play score" 
  "deal bid play score"  
  ;
}

#head{
grid-area: head;
border: 3px gray solid;
width: 100%;
}

#basic{
  grid-area: basic;
border: 3px gray solid;
width: 100%;
}

#hands{
  grid-area: hands;
  border: 3px gray solid;
  width: 100%;
}

#deal{
  grid-area: deal;
  border: 3px gray solid;
}

#bid{
  grid-area: bid;
  border: 3px gray solid;
}

#play{
  grid-area: play;
  border: 3px gray solid;
}

#score{
  grid-area: score;
  border: 3px gray solid;
}

</style>