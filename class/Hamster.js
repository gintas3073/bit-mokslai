import Pet from './Pet.js';

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'hamster';
        this.sound = 'nom nom';
        this.emoji = '🐹🐹';
    }
}

export default Hamster;