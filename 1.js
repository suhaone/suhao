var express = require('express')
var jade = require('jade')
var txt = require('./2.js')
var app = express()

var user = express.Router()
var pass = express.Router()
var tel = express.Router()
var texts = express.Router()
app.use('/user',user)
app.use('/pass',pass)
app.use('/tel',tel)
app.use('/texts',texts)

user.use('',function(req,res){
	var usd = req.query.usd
	var newArr = []
	if(usd == undefined){
	 	newArr=txt.user.slice(0,3)
	 	usd = 0
	}else{
	 	newArr=txt.user.slice(usd*3,usd*3+3)
	}
	var num = Math.ceil(txt.user.length/3)	
	var str = jade.renderFile('./1.jade',{pretty:true,titles:'新闻',txtArr:newArr,nums:num,txtUsd:usd,urld:'user'})
	res.send(str)
})

pass.use('',function(req,res){
	var usd = req.query.usd
	var newArr = []
	if(usd == undefined){
	 	newArr=txt.pass.slice(0,3)
	 	usd = 0
	}else{
	 	newArr=txt.pass.slice(usd*3,usd*3+3)
	}
	var num = Math.ceil(txt.pass.length/3)	
	var str = jade.renderFile('./1.jade',{pretty:true,titles:'娱乐',txtArr:newArr,nums:num,txtUsd:usd,urld:'pass'})
	res.send(str)
})

tel.use('',function(req,res){
	var usd = req.query.usd
	var newArr = []
	if(usd == undefined){
	 	newArr=txt.tel.slice(0,3)
	 	usd = 0
	}else{
	 	newArr=txt.tel.slice(usd*3,usd*3+3)
	}
	var num = Math.ceil(txt.tel.length/3)	
	var str = jade.renderFile('./1.jade',{pretty:true,titles:'军事',txtArr:newArr,nums:num,txtUsd:usd,urld:'tel'})
	res.send(str)
})

var textstr = "<br/>落叶堆积了好几层 而我踩过青春<br/>听见 前世谁在泪语纷纷<br/>一次缘分结一次绳 我今生还在等<br/>一世 就只能有一次的认真<br/>确认过眼神 我遇上对的人<br/>我挥剑转身 而鲜血如红唇<br/>前朝记忆渡红尘 伤人的不是刀刃<br/>是你转世而来的魂<br/>确认过眼神 我遇上对的人<br/>我策马出征 马蹄声如泪奔<br/>青石板上的月光照进这山城<br/>我一路的跟 你轮回声<br/>我对你用情极深<br/>洛阳城旁的老树根 像回忆般延伸<br/>你问 经过是谁的心跳声<br/>我拿醇酒一坛饮恨 你那千年眼神<br/>是我 醉醉坠入赤壁的 伤痕<br/>确认过眼神 我遇上对的人"
app.use('/txt',function(req,res){
	var uid = req.query.txt
	var str = jade.renderFile('./2.jade',{pretty:true,titlename:'醉赤壁 (《赤壁Online》网游主题曲) - 林俊杰',bookName:'曲：林俊杰',times:'1997.12.20',texts:textstr})
	res.send(str)
})
app.use(express.static('./'))

app.listen(8000,function(){
	console.log('ok')
})
