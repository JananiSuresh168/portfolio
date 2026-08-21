# Portfolio

Personal portfolio site. Live at [url once deployed].

## Stack

- React + Vite
- Deployed to S3 behind CloudFront

## Architecture

[Diagram goes here once you deploy]

Static build output syncs to a private S3 bucket. CloudFront serves it
with Origin Access Control — the bucket is never publicly readable.
TLS via ACM.

## Local development

npm install
npm run dev

## Deployment

npm run build
aws s3 sync ./dist s3://<bucket>
aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
