// 2. Shooting Game
// ! setiap ada format objek seperti player, shootinggame, item
class Player {
    name: string;
    health: number;
    power: number;

    constructor(n: string, hp: number = 100, p: number = 10) {
        this.name = n;
        this.health = hp;
        this.power = p;
    }

    damage(lawan: Player) {
        lawan.health -= this.power;
        return `${this.name} Dealt ${this.power} Damge to ${lawan.name}`;
    }
    useItem(item: { hp: number; p: number }) {
        let msg: string = "";
        if (!item.hp && !item.p) {
            return `${this.name} Uses NO Item `;
        }
        if (item.hp && item.p) {
            msg = `+${item.hp} HP and +${item.p} Power`;
        } else {
            item.hp ? (msg = `+${item.hp} HP`) : (msg = `+${item.p} Power`);
        }
        this.health += item.hp;
        this.power += item.p;
        return `${this.name} Uses Item ${msg}`;
    }
    showStatus() {
        return `${this.name} HP: ${this.health} Power:${this.power}`;
    }
}
class ShootingGame {
    players: Player[] = [];

    constructor(p1: Player, p2: Player) {
        this.players.push(p1);
        this.players.push(p2);
    }

    getRandomItem() {
        let item: { hp: number; p: number } = { hp: 0, p: 0 };
        item.hp = this.#zeroTen();
        item.p = this.#zeroTen();

        return item;
    }

    #zeroTen() {
        return Math.round(Math.random()) ? 10 : 0;
    }

    start() {
        // const reset: Player[] = this.players;
        const player1 = { ...this.players[0] };
        const player2 = { ...this.players[1] };
        console.log(player1);
        console.log(player2);

        let giliran: number = Math.random() >= 0.5 ? 1 : 0;
        let lawan: number = giliran ? 0 : 1;
        let ronde: number = 0;

        console.log("MULAI");
        console.log(this.players[0].showStatus());
        console.log(this.players[1].showStatus());
        console.log("\n");

        while (this.players[0].health > 0 && this.players[1].health > 0) {
            // setTimeout(() => {
            console.log(`RONDE ${++ronde}`);

            console.log(this.players[giliran].useItem(this.getRandomItem()));
            console.log(this.players[giliran].damage(this.players[lawan]));
            // console.log("v v v v v v v v v v v v v v ");
            console.log("- - - - - - - - - - - - - - - - -");

            console.log(this.players[0].showStatus());
            console.log(this.players[1].showStatus());

            console.log("\n");

            giliran = lawan;
            lawan = giliran ? 0 : 1;
            // }, 5000);
        }

        console.log(
            `PEMENANGNYA ADALAH ${
                this.players[0].health > 0
                    ? this.players[0].name
                    : this.players[1].name
            }`
        );

        this.players[0].health = player1.health;
        this.players[0].power = player1.power;
    }
}

const p1: Player = new Player("Adi");
const p2: Player = new Player("Budi");
const game: ShootingGame = new ShootingGame(p1, p2);

game.start();
