module.exports = {
  apps: [
    {
      name: 'vueblog',
      script: 'build/main.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      // 服务器ip
      host: '47.92.4.135',
      // 分支
      ref: 'origin/master',
      // 仓库地址
      repo: 'git@github.com:wwb1117/MPC-blog.git',
      path: '/www/vueblog',
      'post-deploy': 'yarn && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
