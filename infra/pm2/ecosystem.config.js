// ─────────────────────────────────────────────────
//  PM2 Ecosystem Config — GOLDNEEZ
//  Usage on VPS:
//    pm2 start infra/pm2/ecosystem.config.js
//    pm2 save
//    pm2 startup
// ─────────────────────────────────────────────────

module.exports = {
  apps: [
    {
      name: 'goldneez-v1',          // Independent from agency-v1
      cwd: '/var/www/goldneez-v1/apps/web',
      script: 'node_modules/.bin/next',
      args: 'start',
      instances: 1,                  // Increase to 'max' for multi-core
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,                  // Different port from agency-v1 (3000)
      },
      // Logs
      out_file: '/var/log/pm2/goldneez-v1-out.log',
      error_file: '/var/log/pm2/goldneez-v1-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      // Auto-restart
      autorestart: true,
      restart_delay: 3000,
      max_restarts: 10,
      min_uptime: '10s',
    },
  ],
};
