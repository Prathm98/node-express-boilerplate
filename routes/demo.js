const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const list = ['Memeber1', 'Memeber1']

// @route     GET /demo
// @desc      Get demo list
// @access    Public
router.get('/', async (req, res) => {
  try {
    res.json({ Memebers: list })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

// @route     POST /demo
// @desc      Add memeber to the list
// @access    Public
router.post(
  '/',
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
      res.status(200).json({ status: 'Successful', list: list, error: null })
    } catch (error) {
      console.error(error)
      // Send error response with old list
      res
        .status(500)
        .json({ status: 'Unsuccessful', list: list, error: 'Server Error' })
    }
  }
)

module.exports = router
