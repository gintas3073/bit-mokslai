class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.iCanFly = true

    }

    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}. ${this.iCanFly} I am flying : I am not flying`;
    }

}
const Jack = new Parot('Jack', 'blue', 'Skrendu namo');
console.log(Jack);


export default Bird;