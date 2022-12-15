import React, { Component } from "react";
import Header from "./navbar";
import Main from "./main";

class App extends Component {
  constructor() {
    super();
    this.state.questions = this.state.questions.sort(() => Math.random() - 0.5);
  }
  state = {
    questions: [
      {
        questionText: "What is the capital of France?",
        answerOptions: [
          { answerText: "New York", isCorrect: false },
          { answerText: "London", isCorrect: false },
          { answerText: "Paris", isCorrect: true },
          { answerText: "Dublin", isCorrect: false },
        ],
      },
      {
        questionText: "Who is CEO of Tesla?",
        answerOptions: [
          { answerText: "Jeff Bezos", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false },
        ],
      },
      {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
          { answerText: "Apple", isCorrect: true },
          { answerText: "Intel", isCorrect: false },
          { answerText: "Amazon", isCorrect: false },
          { answerText: "Microsoft", isCorrect: false },
        ],
      },
      {
        questionText: "How many Harry Potter books are there?",
        answerOptions: [
          { answerText: "1", isCorrect: false },
          { answerText: "4", isCorrect: false },
          { answerText: "6", isCorrect: false },
          { answerText: "7", isCorrect: true },
        ],
      },
      {
        questionText: "What is the largest planet in the solar system?",
        answerOptions: [
          { answerText: "Jupiter", isCorrect: true },
          { answerText: "Earth", isCorrect: false },
          { answerText: "Mars", isCorrect: false },
          { answerText: "Saturn", isCorrect: false },
        ],
      },
      {
        questionText: "What is the chemical symbol for the element oxygen?",
        answerOptions: [
          { answerText: "O", isCorrect: true },
          { answerText: "O2", isCorrect: false },
          { answerText: "O3", isCorrect: false },
          { answerText: "O4", isCorrect: false },
        ],
      },
      {
        questionText: "What is the capital of Japan?",
        answerOptions: [
          { answerText: "Tokyo", isCorrect: true },
          { answerText: "Seoul", isCorrect: false },
          { answerText: "Beijing", isCorrect: false },
          { answerText: "Osaka", isCorrect: false },
        ],
      },
      {
        questionText: "What is the chemical symbol for the element sodium?",
        answerOptions: [
          { answerText: "Na", isCorrect: true },
          { answerText: "S", isCorrect: false },
          { answerText: "N", isCorrect: false },
          { answerText: "So", isCorrect: false },
        ],
      },
      {
        questionText: "Who is the current President of the United States?",
        answerOptions: [
          { answerText: "Joe Biden", isCorrect: true },
          { answerText: "Donald Trump", isCorrect: false },
          { answerText: "Barack Obama", isCorrect: false },
          { answerText: "George Washington", isCorrect: false },
        ],
      },
      {
        questionText: "What is the capital of Australia?",
        answerOptions: [
          { answerText: "Sydney", isCorrect: false },
          { answerText: "Canberra", isCorrect: true },
          { answerText: "Melbourne", isCorrect: false },
          { answerText: "Perth", isCorrect: false },
        ],
      },
      {
        questionText: "What is the chemical symbol for the element gold?",
        answerOptions: [
          { answerText: "Go", isCorrect: false },
          { answerText: "Au", isCorrect: true },
          { answerText: "G", isCorrect: false },
          { answerText: "Gu", isCorrect: false },
        ],
      },
      {
        questionText: "Who invented the first practical steam engine?",
        answerOptions: [
          { answerText: "James Watt", isCorrect: true },
          { answerText: "Thomas Edison", isCorrect: false },
          { answerText: "Isaac Newton", isCorrect: false },
          { answerText: "Benjamin Franklin", isCorrect: false },
        ],
      },
      {
        questionText: "What year did World War II start?",
        answerOptions: [
          { answerText: "1939", isCorrect: true },
          { answerText: "1941", isCorrect: false },
          { answerText: "1944", isCorrect: false },
          { answerText: "1946", isCorrect: false },
        ],
      },
      {
        questionText: "When did the American Revolutionary War begin?",
        answerOptions: [
          { answerText: "1775", isCorrect: true },
          { answerText: "1776", isCorrect: false },
          { answerText: "1777", isCorrect: false },
          { answerText: "1778", isCorrect: false },
        ],
      },
      {
        questionText:
          "When was the United States Declaration of Independence signed?",
        answerOptions: [
          { answerText: "1776", isCorrect: true },
          { answerText: "1777", isCorrect: false },
          { answerText: "1778", isCorrect: false },
          { answerText: "1779", isCorrect: false },
        ],
      },
      {
        questionText: "When did the United States enter World War I?",
        answerOptions: [
          { answerText: "1914", isCorrect: false },
          { answerText: "1915", isCorrect: false },
          { answerText: "1916", isCorrect: false },
          { answerText: "1917", isCorrect: true },
        ],
      },
      {
        questionText: "When was the United Nations founded?",
        answerOptions: [
          { answerText: "1914", isCorrect: false },
          { answerText: "1919", isCorrect: false },
          { answerText: "1945", isCorrect: true },
          { answerText: "1955", isCorrect: false },
        ],
      },
      {
        questionText: "When was the first moon landing?",
        answerOptions: [
          { answerText: "1962", isCorrect: false },
          { answerText: "1969", isCorrect: true },
          { answerText: "1972", isCorrect: false },
          { answerText: "1976", isCorrect: false },
        ],
      },
      {
        questionText: "What is the main ingredient in a Margherita pizza?",
        answerOptions: [
          { answerText: "Pepperoni", isCorrect: false },
          { answerText: "Mushrooms", isCorrect: false },
          { answerText: "Tomatoes", isCorrect: true },
          { answerText: "Olives", isCorrect: false },
        ],
      },
      {
        questionText: "What is the main ingredient in guacamole?",
        answerOptions: [
          { answerText: "Lettuce", isCorrect: false },
          { answerText: "Tomatoes", isCorrect: false },
          { answerText: "Avocados", isCorrect: true },
          { answerText: "Onions", isCorrect: false },
        ],
      },
      {
        questionText: "What is the main ingredient in a Caesar salad?",
        answerOptions: [
          { answerText: "Lettuce", isCorrect: true },
          { answerText: "Tomatoes", isCorrect: false },
          { answerText: "Avocados", isCorrect: false },
          { answerText: "Onions", isCorrect: false },
        ],
      },
      {
        questionText:
          "What is the maximum number of players on a basketball team?",
        answerOptions: [
          { answerText: "5", isCorrect: true },
          { answerText: "6", isCorrect: false },
          { answerText: "7", isCorrect: false },
          { answerText: "8", isCorrect: false },
        ],
      },
      {
        questionText: "What is the maximum number of players on a soccer team?",
        answerOptions: [
          { answerText: "11", isCorrect: true },
          { answerText: "12", isCorrect: false },
          { answerText: "13", isCorrect: false },
          { answerText: "14", isCorrect: false },
        ],
      },
      {
        questionText: "What is the chemical symbol for the element hydrogen?",
        answerOptions: [
          { answerText: "H", isCorrect: true },
          { answerText: "He", isCorrect: false },
          { answerText: "Li", isCorrect: false },
          { answerText: "Be", isCorrect: false },
        ],
      },
      {
        questionText: "What is the capital of Brazil?",
        answerOptions: [
          { answerText: "Brasília", isCorrect: true },
          { answerText: "São Paulo", isCorrect: false },
          { answerText: "Rio de Janeiro", isCorrect: false },
          { answerText: "Salvador", isCorrect: false },
        ],
      },
      {
        questionText: "What is the capital of Canada?",
        answerOptions: [
          { answerText: "Ottawa", isCorrect: true },
          { answerText: "Toronto", isCorrect: false },
          { answerText: "Montreal", isCorrect: false },
          { answerText: "Vancouver", isCorrect: false },
        ],
      },
      {
        questionText: "What is the capital of South Africa?",
        answerOptions: [
          { answerText: "Pretoria", isCorrect: true },
          { answerText: "Cape Town", isCorrect: false },
          { answerText: "Johannesburg", isCorrect: false },
          { answerText: "Durban", isCorrect: false },
        ],
      },

      {
        questionText:
          "How many points is a successful field goal worth in basketball?",
        answerOptions: [
          { answerText: "1", isCorrect: false },
          { answerText: "2", isCorrect: false },
          { answerText: "3", isCorrect: true },
          { answerText: "4", isCorrect: false },
        ],
      },
      {
        questionText:
          "What is the term for when a player receives the ball from a teammate and then immediately scores a basket?",
        answerOptions: [
          { answerText: "Assist", isCorrect: false },
          { answerText: "Dunk", isCorrect: false },
          { answerText: "Slam", isCorrect: false },
          { answerText: "Fast break", isCorrect: true },
        ],
      },
      {
        questionText:
          "What is the term for when a player dribbles the ball with one hand while their other hand is not touching the ball?",
        answerOptions: [
          { answerText: "Double dribble", isCorrect: false },
          { answerText: "Traveling", isCorrect: false },
          { answerText: "Carry", isCorrect: false },
          { answerText: "Crossover", isCorrect: true },
        ],
      },
      {
        questionText:
          "How many players are on the court for each team at the start of a basketball game?",
        answerOptions: [
          { answerText: "4", isCorrect: false },
          { answerText: "5", isCorrect: true },
          { answerText: "6", isCorrect: false },
          { answerText: "7", isCorrect: false },
        ],
      },
      {
        questionText: "What is the largest mammal in the world?",
        answerOptions: [
          { answerText: "Elephant", isCorrect: true },
          { answerText: "Giraffe", isCorrect: false },
          { answerText: "Hippopotamus", isCorrect: false },
          { answerText: "Gorilla", isCorrect: false },
        ],
      },
      {
        questionText: "What is the fastest animal on land?",
        answerOptions: [
          { answerText: "Cheetah", isCorrect: true },
          { answerText: "Lion", isCorrect: false },
          { answerText: "Puma", isCorrect: false },
          { answerText: "Leopard", isCorrect: false },
        ],
      },
      {
        questionText: "What is the largest bird in the world?",
        answerOptions: [
          { answerText: "Ostrich", isCorrect: true },
          { answerText: "Emu", isCorrect: false },
          { answerText: "Pelican", isCorrect: false },
          { answerText: "Condor", isCorrect: false },
        ],
      },
      {
        questionText: "What is the most venomous snake in the world?",
        answerOptions: [
          { answerText: "Inland Taipan", isCorrect: true },
          { answerText: "Cobra", isCorrect: false },
          { answerText: "Rattlesnake", isCorrect: false },
          { answerText: "Pit Viper", isCorrect: false },
        ],
      },
      {
        questionText: "What is the largest fish in the world?",
        answerOptions: [
          { answerText: "Whale shark", isCorrect: true },
          { answerText: "Great white shark", isCorrect: false },
          { answerText: "Gold Fish", isCorrect: false },
          { answerText: "Killer Whale", isCorrect: false },
        ],
      },
      {
        questionText: "What is the most venomous snake in the world?",
        answerOptions: [
          { answerText: "Inland Taipan", isCorrect: true },
          { answerText: "Cobra", isCorrect: false },
          { answerText: "Rattlesnake", isCorrect: false },
          { answerText: "Pit Viper", isCorrect: false },
        ],
      },
      {
        questionText: "What is the most venomous spider in the world?",
        answerOptions: [
          { answerText: "Brazilian Wandering Spider", isCorrect: true },
          { answerText: "Black Widow Spider", isCorrect: false },
          { answerText: "Brown Recluse Spider", isCorrect: false },
          { answerText: "Redback Spider", isCorrect: false },
        ],
      },
      {
        questionText:
          "What is the largest and most dangerous crocodile species in the world?",
        answerOptions: [
          { answerText: "Saltwater Crocodile", isCorrect: true },
          { answerText: "American Alligator", isCorrect: false },
          { answerText: "Nile Crocodile", isCorrect: false },
          { answerText: "Mugger Crocodile", isCorrect: false },
        ],
      },
      {
        questionText: "Which team has won the most NBA championships?",
        answerOptions: [
          { answerText: "Boston Celtics", isCorrect: true },
          { answerText: "Los Angeles Lakers", isCorrect: false },
          { answerText: "Golden State Warriors", isCorrect: false },
          { answerText: "Chicago Bulls", isCorrect: false },
        ],
      },
      {
        questionText: "Which player has the most NBA championships?",
        answerOptions: [
          { answerText: "Michael Jordan", isCorrect: false },
          { answerText: "Kareem Abdul-Jabbar", isCorrect: false },
          { answerText: "Bill Russell", isCorrect: true },
          { answerText: "Magic Johnson", isCorrect: false },
        ],
      },
      {
        questionText: "Who is the all-time leading scorer in NBA history?",
        answerOptions: [
          { answerText: "Kobe Bryant", isCorrect: false },
          { answerText: "Michael Jordan", isCorrect: false },
          { answerText: "Karl Malone", isCorrect: true },
          { answerText: "LeBron James", isCorrect: false },
        ],
      },
      {
        questionText: "Which player has the most NBA MVP awards?",
        answerOptions: [
          { answerText: "Michael Jordan", isCorrect: false },
          { answerText: "Bill Russell", isCorrect: false },
          { answerText: "Kareem Abdul-Jabbar", isCorrect: true },
          { answerText: "Wilt Chamberlain", isCorrect: false },
        ],
      },
      {
        questionText: "Which player has the most NBA assists?",
        answerOptions: [
          { answerText: "John Stockton", isCorrect: true },
          { answerText: "Jason Kidd", isCorrect: false },
          { answerText: "Steve Nash", isCorrect: false },
          { answerText: "Magic Johnson", isCorrect: false },
        ],
      },
      {
        questionText: "Which player has the most NBA rebounds?",
        answerOptions: [
          { answerText: "Bill Russell", isCorrect: false },
          { answerText: "Wilt Chamberlain", isCorrect: true },
          { answerText: "Kareem Abdul-Jabbar", isCorrect: false },
          { answerText: "Karl Malone", isCorrect: false },
        ],
      },
      {
        questionText: "What is the title of Quentin Tarantino's first movie?",
        answerOptions: [
          { answerText: "Pulp Fiction", isCorrect: false },
          { answerText: "Reservoir Dogs", isCorrect: true },
          { answerText: "Kill Bill", isCorrect: false },
          { answerText: "Inglourious Basterds", isCorrect: false },
        ],
      },
      {
        questionText:
          "What is the title of Quentin Tarantino's most recent movie?",
        answerOptions: [
          { answerText: "Once Upon a Time in Hollywood", isCorrect: true },
          { answerText: "The Hateful Eight", isCorrect: false },
          { answerText: "Django Unchained", isCorrect: false },
          { answerText: "Death Proof", isCorrect: false },
        ],
      },
      {
        questionText:
          "What is the title of the movie that Quentin Tarantino wrote but did not direct?",
        answerOptions: [
          { answerText: "From Dusk Till Dawn", isCorrect: true },
          { answerText: "Pulp Fiction", isCorrect: false },
          { answerText: "Reservoir Dogs", isCorrect: false },
          { answerText: "Natural Born Killers", isCorrect: false },
        ],
      },
      {
        questionText:
          "Which of these movies was NOT directed by Quentin Tarantino?",
        answerOptions: [
          { answerText: "Grindhouse", isCorrect: true },
          { answerText: "The Hateful Eight", isCorrect: false },
          { answerText: "Death Proof", isCorrect: false },
          { answerText: "Jackie Brown", isCorrect: false },
        ],
      },
      {
        questionText:
          "Which of these actors has NOT appeared in a Quentin Tarantino movie?",
        answerOptions: [
          { answerText: "Julia Roberts", isCorrect: true },
          { answerText: "John Travolta", isCorrect: false },
          { answerText: "Uma Thurman", isCorrect: false },
          { answerText: "Samuel L. Jackson", isCorrect: false },
        ],
      },
    ],
    hearts: {
      heart1: "🖤",
      heart2: "🖤",
      heart3: "🖤",
    },
    currentQuestion: 0,
    showScore: false,
    wonGame: false,
    score: 1,
  };

  handleGiveUp() {
    window.location = "/";
  }
  handleAnswerButtonClick = (e, isCorrect) => {
    const nextQuestion = this.state.currentQuestion + 1;
    this.state.questions[nextQuestion].answerOptions.sort(
      () => Math.random() - 0.5
    );
    if (nextQuestion == 20) {
      window.location = "/won";
      this.setState({ currentQuestion: this.state.currentQuestion });
    }
    if (isCorrect == true) {
      this.setState({ questions: this.state.questions });
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.setState({ questions: this.state.questions });
      this.setState({ currentQuestion: nextQuestion });
      const hearts = this.state.hearts;
      if (this.state.hearts.heart3 == "🖤") {
        this.state.hearts.heart3 = "🤍";
        this.setState({ hearts });
      } else if (this.state.hearts.heart2 == "🖤") {
        this.state.hearts.heart2 = "🤍";
        this.setState({ hearts });
        alert("last life");
      } else if (this.state.hearts.heart2 == "🤍") {
        this.setState({ currentQuestion: this.state.currentQuestion });
        window.location = "/lost";
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main
          hearts={this.state.hearts}
          handleGiveUp={this.handleGiveUp}
          handleAnswerButtonClick={(e, isCorrect) =>
            this.handleAnswerButtonClick(e, isCorrect)
          }
          randomQuestion={this.state.randomQuestion}
          questions={this.state.questions}
          currentQuestion={this.state.currentQuestion}
          showScore={this.state.showScore}
          wonGame={this.state.wonGame}
          score={this.state.score}
        />
      </React.Fragment>
    );
  }
}

export default App;
