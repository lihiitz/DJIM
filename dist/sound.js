class Sound {
    constructor() {
        console.log(`in sound.js`)

    }
    makeSound(d, n) {
        let synth = new Tone.Synth().toMaster()
        synth.triggerAttackRelease(d, n)
        Tone.start()
    }
}