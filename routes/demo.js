const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const list = ['Ankit', 'Sanjeev', 'Keshav', 'Prathmesh']

// @route     GET /members
// @desc      Get members list
// @access    Public
router.get('/members', async (req, res) => {
  try {
    res.json({ Members: list })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

// @route     POST /addmember
// @desc      Add memeber to the list
// @access    Public
router.post(
  '/addmember',
  [check('newmember', 'New Member is required!!!').exists()],
  async (req, res) => {
    try {
      // Validating request parameters
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        // Sending error response if there are any errors
        return res.status(400).json({ errors: errors.array() })
      }

      // Retrive request data
      const { newmember } = req.body

      // Perform logical ops
      list.push(newmember)

      // Send successful response with updated data
      res.status(200).json({ status: 'Successful', Members: list, error: null })
    } catch (error) {
      console.error(error)
      // Send error response with old list
      res
        .status(500)
        .json({ status: 'Unsuccessful', Members: list, error: 'Server Error' })
    }
  }
)

module.exports = router
