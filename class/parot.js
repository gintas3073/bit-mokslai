import bird from './bird.js';

class Parot extends Bird {
    constructor(name, color, sound) {
        super(name, color, iCanFly);

        this.breed = 'parot';
        this.repPhrase = this.onePhrase(sound);
        this.historyPhrases = this.threePhrases(phrase);
    }

}
turnOfFlying() {
    this.iCanFly = false;
    this.onePhrase = phrase;

}
threePhrases(phrase) {
    if (i = 0, i < 4, i++) {
        threePhrases += phrase(i);
    } else {
        threePhrase += phrase(i) - phrase(i - 3);

    }
}
export default Parot;
