const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '822858',
    key: 'da3c4adc6a401c720a0c',
    secret: '5097e24d438e4488118f',
    cluster: 'ap2',
    encrypted: true
  });

router.get('/',(req,res)=>{
    res.send('maa gya');
})
router.post('/',(req,res)=>{
    pusher.trigger('party-poll', 'party-vote', {
        points:1,
        party: req.body.group1
      });
      return res.json({success:true,message:'sent successfully'});
})
module.exports = router;