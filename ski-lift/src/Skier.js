class Skier {
    constructor (skier) {
        this.name = skier;
        this.hasLiftTicket = true;
        this.skillLevel = 1;
        this.nextSlope = 'green circle';
        this.slopeSkills = ['green circle', 'blue square', 'black diamond']
    }

    takeLesson() {
        this.skillLevel += 1;
    }

    pickSlope() {
        if (this.skillLevel === 3) {
            this.nextSlope = 'blue square'
        }
        if (this.skillLevel === 5) {
            this.nextSlope = 'black diamond'
        }
    }
}

module.exports = Skier;