<template>
  <div>
    <div id="container">
      <div id="head" class="card top-cards">
      <h1>RULES</h1>
      <h2>4-7 Players <br> Standard 52 Card Deck Required</h2>
      </div>
      
      <div id="basic" class="card top-cards">
      <span><h2>Length: 10 rounds</h2></span>
      <h2>Win Condition: Highest points at end of 10 rounds</h2>
      <h2>Ranks of Cards (Highest to Lowest): <br>
      (Clubs in following order), A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.</h2>
      <p></p>
      </div>

      <div id="hands" class="card top-cards">
      <h2>Hand order per player count:
        <ul>
          <li>4-5 players: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1</li>
          <li>6 players: 6, 7, 8, 7, 6, 5, 4, 3, 2, 1</li>
          <li>7 players: 4, 5, 6, 7, 6, 5, 4, 3, 2, 1</li>
        </ul>
      </h2>
      </div>
      
      <div id="deal" class="card bottom-cards">
      <h2>The Deal</h2>
      <ol>
        <li>Shuffle the deck of cards to randomize the order.</li>
        <li>Determine the first dealer by dealing one card to each player. The player with the highest-ranking card becomes the first dealer. Card ranks are based on their rank within normal play, ascending face value (e.g., 2, 3, 4, ..., 10) or their order (e.g., Jack, Queen, King, Ace) with the suit of Clubs as trump.</li>
        <li>Return all the cards used to decide the first dealer back to the deck.</li>
        <li>The chosen dealer starts dealing the cards one at a time, beginning with the player to their left and proceeding clockwise around the table.</li>
        <li>The dealer continues dealing until all players have received the appropriate number of cards for the specific round. The number of cards dealt depends on the hand count for that particular round.</li>
        <li>After each round of play, all the cards are collected and returned to the deck.</li>
        <li>The deck is shuffled again to prepare for the next round.</li>
        <li>The person sitting to the left of the current dealer becomes the next dealer, and the dealing process proceeds in the same clockwise manner for ten total rounds.</li>
      </ol>
      <p>By following these clear steps, the card game can be played smoothly and fairly, with each player getting a chance to be the dealer in a systematic rotation.</p>
      </div>

      <div id="bid" class="card bottom-cards">
      <h2>The Bid</h2>
      <ol>
        <li>After all the cards for the current round are dealt to each player, the players will predict or "bid" on how many hands they believe they will win. A hand is won by the player who has the highest-ranking card in the suit that was led, or the highest trump card if a trump suit is in play.</li>
        <li>The bidding process starts with the player sitting to the left of the dealer, and it proceeds clockwise, with each player making their bid one after another, including the dealer.</li>
        <li>Players are allowed to bid any number from 0 to the number of cards they initially received in their hand at the beginning of the round.</li>
        <li>To ensure that not all players can fulfill their bids and to add strategy to the game, the dealer has a restriction: They cannot make a bid that would make the total sum of all bids equal to the number of cards in their current hand.</li>
        <li>Once a player makes a bid, it cannot be changed or altered during the bidding phase.</li>
        <li>After all players have made their bids, the total sum of all the bids is calculated.</li>
        <li>If the sum of all bids is less than the number of cards in the current hand, the round is considered a "push," which means that the players collectively predicted they would win fewer hands than the total available.</li>
        <li>If the sum of all bids is greater than the number of cards in the current hand, the round is considered a "fight," indicating that the players collectively predicted they would win more hands than the total available.</li>
      </ol>
      <p>By following these clear steps, the bidding process in the card game will be fair and well-defined, adding excitement and strategy to the gameplay.</p>
      </div>

      <div id="play" class="card bottom-cards">
      <h2>The Play</h2>
      <ol>
        <li>The player to the left of the dealer starts the round by playing one of their cards. However, they must avoid leading with a card of the suit "clubs" unless clubs are the only suit they have, or if clubs have already been played by another player in a previous hand.</li>
        <li>Moving clockwise, each player takes their turn to play a card for this hand. Players are required to play a card of the same suit as the card initially played in the hand, if they have a card of that suit in their hand. If a player doesn't have a card of the same suit, they may play an offsuit card.</li>
        <li>The player who plays the highest-ranking card of the initial suit that was led, or the player with the highest-ranking trump card if trumps are in play, wins that hand.</li>
        <li>The winner of the hand becomes the new leader for the next hand and will start by playing a card for that hand.</li>
        <li>The hands will continue in this manner until all the cards for this round are played.</li>
        <li>At the end of each round, the scores are compiled, and the new dealer is determined. The new dealer is the player to the left of the current dealer, and the gameplay proceeds in the same manner for the next round.</li>
      </ol>
      <p>By following these clear steps, the card game can be played smoothly and players can strategize based on the suits they have, the cards played by others, and the potential trump cards to secure winning hands.</p>
      </div>

      <div id="score" class="card bottom-cards">
      <h2>Scoring</h2>
      <ol>
        <li>During each round, players earn points based on the number of hands they took. For each hand won, a player is awarded one point.</li>
        <li>If a player managed to take the exact number of hands they initially bid at the beginning of the round, they are granted an additional 10 points as a bonus.</li>
        <li>At the end of each round, the points earned by each player are totaled.</li>
        <li>After playing ten rounds, the game concludes. The player with the highest total points accumulated over the ten rounds is declared the winner.</li>
      </ol>
      <p>By following these clear scoring rules, players can keep track of their progress throughout the game, and the winner can be determined based on their overall performance and strategic bidding and gameplay.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul li{
  list-style: none;
}

ol{
  text-align: left;
  padding-right: 1%;
}

ol li{
  margin-bottom: 1%;
}

p{
  padding-right: 1%;
  padding-left: 1%;
}

.card{
  border: 6px gray solid;
  border-radius: 3%;
}

#container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 
  "head head head head"
  "basic basic hands hands"
  "deal deal bid bid"
  "deal deal bid bid" 
  "play play score score"  
  "play play score score"  
  ;
  column-gap: 10px;
  row-gap: 10px;
}

#head{
grid-area: head;
width: 50%;
margin: auto;
}

.top-cards{
  background: #17252A;

}

.bottom-cards{
  background: #2B7A78;

}

#basic{
  grid-area: basic;
}

#hands{
  grid-area: hands;
}

#deal{
  grid-area: deal;
}

#bid{
  grid-area: bid;
}

#play{
  grid-area: play;
}

#score{
  grid-area: score;
}

</style>