const express=require("express")
const axios=require("axios")
const cors=require("cors")
const app=express()

app.use(cors())
app.use(express.json())

app.post("/weather",async(req,res)=>{
const city=req.body.city
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bce474366b2713f3cbdae07b7a89b09f&units=metric`
try{
const r=await axios.get(url)
res.json({temp:r.data.main.temp,weather:r.data.weather[0].main})
}catch(e){
res.json({error:"Invalid city"})
}
})

app.listen(3000)
