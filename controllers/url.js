const {nanoid}=require('nanoid')
const URL=require('../models/url')


exports.generateNewShortUrl=async(req,res)=>{
    const body=req.body;
    if(!body.url)return res.status(400).json({
        error:"URL required"
    })
    const shortID=nanoid(8);
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    });

    return res.status(200).json({id:shortID})
}

exports.redirectToUrl=async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
        shortId
    },{
       $push:{
        visitHistory:{
            timeStamp:Date.now()},
       } 
    })

    return res.redirect(entry.redirectURL)
}

exports.getAnalytics=async(req,res)=>{
    const shortId=req.params.shortId;
    const result=await URL.findOne({
        shortId
    })

    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    })
}