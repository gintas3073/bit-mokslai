// konstruktorių su trimis parametrais, kraštinėmis A, B, C

class Triangle {    
    constructor(
        public sideA: number, 
        public sideB: number, 
        public sideC: number) {
        
        if (!this.isValidTriangle()) {
            throw new Error('Ktrastines neformuoja trikampio');
        }
    }

  //  Sukurti set'erius ir get'erius

    setSideA(value: number): void {
        if (this.isValidSide(value)) {
            this.sideA = value;
        } else {
            throw new Error('Krastine netinkama');
        }
    }

    getSideA(): number {
        return this.sideA;
    }

    setSideB(value: number): void {
        if (this.isValidSide(value)) {
            this.sideB = value;
        } else {
            throw new Error('Krastine netinkama');
        }
    }

    getSideB(): number {
        return this.sideB;
    }

    setSideC(value: number): void {
        if (this.isValidSide(value)) {
            this.sideC = value;
        } else {
            throw new Error('Krastine netinkama');
        }
    }

    getSideC(): number {
        return this.sideC;
    }

    //Ar formuoja trikampi
    private isValidTriangle(): boolean {
        return this.sideA + this.sideB > this.sideC &&
               this.sideA + this.sideC > this.sideB &&
               this.sideB + this.sideC > this.sideA;
    }

    // Trikampio Perimetras
    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    // Trikampio plotas
    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    // Trikampiu palyginimas
    largerTriangle(t: Triangle): boolean {
        return this.getArea() >= t.getArea();
    }

    // Sukurkite metodą toString() kuris gražintų 
    //trikampį string formatu (atspausdinimui)
    toString(): string {
        return `Triangle with sides ${this.sideA}, ${this.sideB}, ${this.sideC}`;
    }
}

//Trikampiu masyvas
const triangles: Triangle[] = [
    new Triangle(3, 4, 5),
    new Triangle(5, 12, 13),
    new Triangle(7, 24, 25)
];

//  Sukurkite masyvą su trimis trikampiais ir parašykite programinį kodą kuris suskaičiuotų 
//visų šių trikampių plotų sumą

const totalArea: number = triangles.reduce((sum, triangle) => sum + triangle.getArea(), 0);
console.log("Bendras trikampiu plotas:", totalArea);