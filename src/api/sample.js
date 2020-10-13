const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.json(['Hey!', 'this', 'is', 'a', 'demo', 'api']);
})

module.exports = router;