#!/bin/bash
# ─────────────────────────────────────────────────
#  GOLDNEEZ — VPS Setup Script
#  Run once on the VPS after cloning the repo
#  Usage: bash infra/scripts/setup-vps.sh
# ─────────────────────────────────────────────────

set -e

echo "🟡 GOLDNEEZ — VPS Setup starting..."

# ── 1. Install dependencies ──────────────────────
cd /var/www/goldneez-v1/apps/web
npm install --production=false

# ── 2. Copy env file ─────────────────────────────
if [ ! -f ".env.local" ]; then
  cp ../../.env.example .env.local
  echo "⚠️  .env.local created from template — FILL IN YOUR SECRETS before continuing!"
  exit 1
fi

# ── 3. Generate Prisma client ─────────────────────
echo "📦 Generating Prisma client..."
npx prisma generate

# ── 4. Run DB migrations ──────────────────────────
echo "🗄️  Running DB migrations..."
npx prisma migrate deploy

# ── 5. Build Next.js ──────────────────────────────
echo "🏗️  Building Next.js app..."
npm run build

# ── 6. Start with PM2 ────────────────────────────
echo "🚀 Starting PM2 process..."
pm2 start ../../infra/pm2/ecosystem.config.js
pm2 save

# ── 7. Nginx ─────────────────────────────────────
echo ""
echo "📋 Manual steps remaining:"
echo "  1. sudo cp ../../infra/nginx/goldneez.tech.conf /etc/nginx/sites-available/goldneez.tech"
echo "  2. sudo ln -s /etc/nginx/sites-available/goldneez.tech /etc/nginx/sites-enabled/"
echo "  3. sudo nginx -t"
echo "  4. sudo certbot --nginx -d goldneez.tech -d www.goldneez.tech"
echo "  5. sudo systemctl reload nginx"
echo ""
echo "✅ GOLDNEEZ setup complete! Running on port 3001"
