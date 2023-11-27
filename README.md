`npm install` to install modules

`npm start` to test locally on http://localhost:8080/, with endpoint `login`

`npm run start:money` to test locally on http://localhost:8080/, with endpoint `money`

currenly command for deploy to google cloud platform: `npm run deploy`

original deploy script:
```
gcloud functions deploy login \
  --gen2 \
  --runtime=nodejs20 \
  --region=asia-east1 \
  --source=. \
  --entry-point=login \
  --trigger-http \
  --allow-unauthenticated
```