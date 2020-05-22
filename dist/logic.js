class Logic{
    constructor(){
        this.song = []
        this.save = false
    }


    setSave(val){this.save = val}
    saveSound(sound){this.song.push(sound)}
    isSave(){return this.save}
    
    saveSongInDB(name){
         $.post(`/song`, {src: this.song, name: name})
         this.song = []
    }
    async getSongFromDB(name) {
        const song = await $.get(`/song/${name}`)
        console.log(song);
        this.playSequence(song[0].sequence)
    }
    async getAllNames(){
      const names = await $.get(`/songNames`)
      return names
    }
    playSequence = (sounds) => {
        let audio = new Audio();
        let currentSoundIndex = 0;

        const playNextSound = () => {
          audio.src = sounds[currentSoundIndex++];
          audio.currentTime = 0;
          audio.play();
        };
      
        if (sounds.length) {  
          playNextSound();
      
          audio.addEventListener('ended', () => {
            if (currentSoundIndex < sounds.length) {
              playNextSound();
            }
          });
        }
      }
      
}