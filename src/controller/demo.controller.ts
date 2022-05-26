import { Router, Response, Request } from 'express'
import { json } from 'stream/consumers'

export class DemoController {
  public router: Router
  private list: Array<String>

  constructor() {
    this.router = Router()
    this.routes()
    this.list = ['Memeber1', 'Memeber1']
  }

  // @route     GET /demo
  // @desc      Get demo list
  // @access    Public
  public index = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ Memebers: this.list })
    } catch (error) {
      console.error(error)
      res.status(500).send('Server Error')
    }
  }

  // @route     POST /demo
  // @desc      Add memeber to the list
  // @access    Public
  public addMember = async (req: Request, res: Response) => {
    try {
      // Retrive request data
      const { newmember } = req.body

      // Validating request parameters
      if (!newmember) {
        // Sending error response if there are any errors
        return res.status(400).json({ errors: ['New Member is required!!!'] })
      }

      // Perform logical ops
      this.list.push(newmember)

      // Send successful response with updated data
      res
        .status(200)
        .json({ status: 'Successful', list: this.list, error: null })
    } catch (error) {
      console.error(error)
      // Send error response with old list
      res.status(500).json({
        status: 'Unsuccessful',
        list: this.list,
        error: 'Server Error',
      })
    }
  }

  /**
   * Configure the routes of controller
   */
  public routes() {
    this.router.get('/', this.index)
    this.router.post('/', this.addMember)
  }
}
