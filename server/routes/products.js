import express from 'express';
import React from 'react'
import {getProducts} from '../controllers/api/products';

const router = express.Router();

router.get('/api/products', getProducts);

export default router;