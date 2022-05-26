import express from 'express'
import { HomeController } from './controller/home.controller'
import { DemoController } from './controller/demo.controller' // import the post controller
import cors from 'cors'

class Server {
  private demoController: DemoController
  private homeController: HomeController
  private app: express.Application

  constructor() {
    this.app = express() // init the application
    this.configuration()
    this.routes()
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment
   * variables it takes the default port 3000
   */
  public configuration() {
    this.app.use(cors())
    this.app.set('port', process.env.PORT || 5000)
    this.app.use(express.json())
  }

  /**
   * Method to configure the routes
   */
  public async routes() {
    this.demoController = new DemoController()
    this.homeController = new HomeController()

    this.app.use(`/`, this.homeController.router) // Configure the new routes of the controller home
    this.app.use(`/`, this.demoController.router) // Configure the new routes of the controller demo
  }

  /**
   * Used to start the server
   */
  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`)
    })
  }
}

const server = new Server() // Create server instance
server.start() // Execute the server
