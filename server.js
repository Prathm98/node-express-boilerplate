const express = require('express')
const app = express()

// Init Middleware
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000

// CORS policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

// @route     GET /
// @desc      Get server status
// @access    Public
app.get('/', (req, res) => res.status(200).json({ Status: 'Running' }))

// Defining Routes
app.use('/detail', require('./routes/details'))
app.use('/', require('./routes/demo'))

// Starts server to listen on port
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
