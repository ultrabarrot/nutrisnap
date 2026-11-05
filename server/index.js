const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (req,res)=>res.json({status:'ok'}))

// Mock endpoints
app.get('/api/foods', (req,res)=>res.json([
  {id:1,name:'Arroz blanco',calories:205},
  {id:2,name:'Pechuga de pollo',calories:165}
]))

app.get('/api/recipes', (req,res)=>res.json([]))
app.get('/api/plans', (req,res)=>res.json([]))
app.get('/api/progress', (req,res)=>res.json({weight:72.4,calories:1420}))

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>console.log(`NutriSnap API on http://localhost:${PORT}`))
