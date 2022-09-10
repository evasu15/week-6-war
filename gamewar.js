class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this._cards = [];
    };

    get cards() {
        return this._cards;
    }

    buildDeck() {
        this.populate();
        this.shuffleDeck();
        return this._cards;
    }

    populate() {
        const suits = ["♥","♦","♠","♣"];
        const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this._cards.push(new Card(ranks[j], suits[i], values[j]));
            }
        }
    }

    shuffleDeck() {
        if (this._cards.length > 0) {
            const shuffledDeck = this._cards.sort(() => Math.random() - 0.5)
            this._cards = [...shuffledDeck];
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.playerScore = 0;
        this.playerDeck = [];
    }

    get score() {
        this.playerScore;
    }

    set deck(newDeck) {
        if(Array.isArray(newDeck)) {
            this.playerDeck = newDeck;
        }
    }

    set score(newScore) {
        if(!isNaN(newScore)) {
            this.playerScore = newScore;
        }
    }
}

class GameMaster {
    constructor() {
        this.players = [];
        this.deck = [];
    }

    createGame() {
        this.players[0] = new Player('Player 1');
        this.players[1] = new Player('Player 2');

        const cards = new Deck().buildDeck();
        
        this.players[0].deck = [...cards.slice(0, 26)];
        this.players[1].deck = [...cards.slice(26, 52)];
        
        for (let i = 0; i < this.players[0].playerDeck.length; i++) {
            if(this.players[0].playerDeck[i].value > this.players[1].playerDeck[i].value) {
                this.players[0].playerScore += 1;
                let winningHand = `${this.players[0].playerDeck[i].rank} of ${this.players[0].playerDeck[i].suit}`;
                console.log(`${this.players[0].name} won with a ${winningHand}`);
            } else if(this.players[0].playerDeck[i].value < this.players[1].playerDeck[i].value) {
                this.players[1].playerScore +=1;
                let winningHand = `${this.players[1].playerDeck[i].rank} of ${this.players[1].playerDeck[i].suit}`;
                console.log(`${this.players[1].name} won with a ${winningHand}`);
            } else {
                console.log('tied');
            }
        }

        if(this.players[0].playerScore > this.players[1].playerScore) {
            console.log(`${this.players[0].name.toUpperCase()} WON WAR with a score of ${this.players[0].playerScore}`);
        } else if(this.players[0].playerScore < this.players[1].playerScore) {
            console.log(`${this.players[1].name.toUpperCase()} WON WAR with a score of ${this.players[1].playerScore}`);
        } else {
            console.log(`${this.players[0].name.toUpperCase()} and ${this.players[1].name.toUpperCase()} TIED`);
        }
    }
}


const newGame = new GameMaster();
newGame.createGame();


