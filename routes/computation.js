var express = require('express');
var router = express.Router();
let y
/* GET home page. */
router.get('/', function(req, res, next) {
  let x=Math.random();

    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.log2(x);
    let t=Math.cosh(x);
    let n=Math.floor(x);
    
  res.render('computation', { x:x,log:r, cos:t, floor:n});
});

module.exports = router;
