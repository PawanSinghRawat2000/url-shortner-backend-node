const express=require('express')
const router=express.Router()
const {generateNewShortUrl, redirectToUrl, getAnalytics}=require('../controllers/url')

router.route('/').post(generateNewShortUrl); 

router.route('/:shortId').get(redirectToUrl)

router.route('/analytics/:shortId').get(getAnalytics)
module.exports=router