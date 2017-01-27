import express from 'express';
import React from 'react'
import {getHomePage} from '../controllers/pages/home';

const router = express.Router();

router.get('', getHomePage);

export default router;