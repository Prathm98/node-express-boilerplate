import { Router, Response, Request } from 'express'

export class HomeController {
  public router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  // @route     GET /
  // @desc      Get server status
  // @access    Public
  public index = async (req: Request, res: Response) => {
    res.status(200).json({ Status: 'Running' })
  }

  // @route     GET /detail
  // @desc      Get tech stack details
  // @access    Public
  public techStack = async (req: Request, res: Response) => {
    res.status(200).json({ Stack: 'Node TypeScript with Express' })
  }

  /**
   * Configure the routes of controller
   */
  public routes() {
    this.router.get('/', this.index)
    this.router.get('/detail', this.techStack)
  }
}
