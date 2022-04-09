const express = require('express');
const Item = require('../../models/Item');
const router = express.Router(); 

/*******   api    **********/

router.get("/api/items",(req,res)=>{

    Item.find()
    .sort({date : -1})
    .then(items => res.json(items))

})

router.post('/api/items',(req,res)=>{

    const newItem = new Item({
        name : req.body.name
    })
    newItem.save()
    .then(item => res.json(item))
})

router.delete('/api/items/:id', (req, res) => {
    Item.findById(req.params.id)
          . then( item => item.remove(). then( () => res.json( {success:true} ) ) )
          .catch( err => res.status (404).json( {success:false} ) )
   });

module.exports = router