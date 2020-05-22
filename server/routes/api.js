const express = require('express');
const router = express.Router();
const Song = require(`../model/Song`)

router.get(`/song/:name`, async function(req, res){ 
    const name = req.params.name
    let songs = await Song.find({name: name})
    res.send(songs)
})
router.get(`/songNames`, async function(req, res){
    const names = await Song.find({}).select("name")
    res.send(names)
})
router.post(`/song`, async function(req, res){
    let song = req.body
    console.log(song)
    const songObj = new Song({
        name: song.name,
        sequence: song.src
    })
    await songObj.save()
    res.send(`save`)
})

module.exports = router;