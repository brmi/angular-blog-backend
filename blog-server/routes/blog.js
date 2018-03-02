var express = require('express');
var router = express.Router();

/* GET blog listing. */
router.get('/blog/:username', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;
