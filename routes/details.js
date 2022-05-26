const express = require('express')
const router = express.Router()

// @route     GET /detail
// @desc      Get tech stack details
// @access    Public
router.get('/', async (req, res) => {
  try {
    res.json({ Stack: 'NodeJS with express' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

module.exports = router
