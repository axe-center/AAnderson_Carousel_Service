module.exports = {
    apps: [{
      name: 'server',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-19-29-97.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/fec_carousel.pem',
        ref: 'origin/master',
        repo: 'https://github.com/axe-center/AAnderson_Carousel_Service.git',
        path: '/home/ubuntu/AAnderson_Carousel_Service',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }