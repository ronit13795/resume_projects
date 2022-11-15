import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";

export default function Game({ name, setPlayer, player }) {
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [playerCard, setPlayerCard] = useState(playerCards[index]);
  const [computerCard, setComputerCard] = useState(computerCards[index]);
  const [playerWins, setPlayerWins] = useState(0);

  const nav = useNavigate();

  useEffect(() => {
    const cards = [];
    for (let i = 1, card = 1; i < 53; i++) {
      cards.push(card);
      if (i % 4 === 0) {
        card++;
      }
    }

    let randomIndex;
    let computerCards = [];
    let playerCards = [];
    for (let i = 0; i < 26; i++) {
      randomIndex = Math.floor(Math.random() * cards.length);

      computerCards.push(cards[randomIndex]);
      cards.splice(randomIndex, 1);
      randomIndex = Math.floor(Math.random() * cards.length);
      playerCards.push(cards[randomIndex]);
      cards.splice(randomIndex, 1);
    }
    setComputerCards([...computerCards]);
    setPlayerCards([...playerCards]);
    setPlayerCard(playerCards[index]);
    setComputerCard(computerCards[index]);
  }, []);

  const nextCard = () => {
    if (index > 24) {
      if (playerWins > 13) {
        setPlayer({ ...player, wins: player.wins + 1 });
      } else {
        setPlayer({ ...player, lose: player.lose + 1 });
      }
      nav("/result");
    }
    setComputerCard(computerCards[index + 1]);
    setPlayerCard(playerCards[index + 1]);
    setIndex(index + 1);
  };

  useEffect(() => {
    if (playerCard > computerCard) {
      setPlayerWins(playerWins + 1);
    }
  }, [playerCard]);

  return (
    <div>
      {playerCard > computerCard ? <p>player win</p> : <p>computer win</p>}
      computer card: <Card card={computerCard} />
      {name}: <Card card={playerCard} />
      <button onClick={nextCard}>next</button>
    </div>
  );
}
