// Object Oriented Piracy
// https://www.codewars.com/kata/54fe05c4762e2e3047000add

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    this.isWorthIt = function () {
        let crewWeight = this.crew * 1.5

        return this.draft - crewWeight > 20 ? true : false
    }
}