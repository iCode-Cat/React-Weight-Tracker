const { Router } = require('express');
const Tracker = require('../Model/Tracker')

const router = Router();

router.post('/', async (req,res) => {

    const {username} = req.body

try {
    
    const insert = await Tracker.create({username})
    .then((result) => res.json(result))

} catch (error) {
    console.log(error);
}
    

});

module.exports = router;