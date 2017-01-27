import express from 'express';
let router = express.Router();

router.use('/api/products', require('./products'));
router.use('/', require('./pages'));

export default router;