# NODE JS EXPRESS Boilerplate

<div>
  Created by BitByBit team and maintained with ❤️ by an amazing <a href="https://www.hackerearth.com/challenges/hackathon/airbus-aerothon-40-finale/dashboard/1bfeeee/team/">team of developers</a>.
</div><br />

## Prerequisite

- Node v14.x or above : Installation instructions can be found [here.](https://nodejs.dev/learn/how-to-install-nodejs)
- Node Package Manager v6.x or above : It will be installed along with node installation.

## POST method demo

POST method demo is available in `routes/demo.js` file as `post()` method.

## Available Scripts

To start with the project, run below command to install the project:

### `npm install`

Now your application is ready to run. Run below command to run app in developement mode.

### `npm run server`

Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## To deploy the application

### Prerequisite - PM2 (Node package), docs can be found [here.](https://www.npmjs.com/package/pm2)

### Installing PM2 with NPM:

`$ npm install pm2 -g`

### Start an application

You can start application using below command:

`$ pm2 start app.js`
Your app is now daemonized, monitored and kept alive forever.

### Managing Applications

Once applications are started you can manage them easily:

To list all running applications:

`$ pm2 list`

Managing apps is straightforward:

`$ pm2 stop <app_name>`
`$ pm2 restart <app_name>`
`$ pm2 delete <app_name>`
