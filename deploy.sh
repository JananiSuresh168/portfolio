#!/bin/bash
set -e

BUCKET="janani828-portfolio"
DIST_ID="EJ1Y2TA6BGT4D"

echo "Building..."
npm run build

echo "Uploading assets..."
aws s3 sync ./dist s3://$BUCKET \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "*.html" --delete

echo "Uploading HTML..."
aws s3 sync ./dist s3://$BUCKET \
  --cache-control "public,max-age=0,must-revalidate" \
  --exclude "*" --include "*.html"

echo "Invalidating cache..."
aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"

echo "Done."
