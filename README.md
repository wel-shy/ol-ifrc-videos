# Data Driven Documentary - Tumbit Melayu

> This is a data driven documentary of the evaluation of IFRC's WASH project in Tumbit Melayu
> Output from the Filmmaking Hackathon at the University of York, 18-20th of May, 2018.

## Overview
Consists of three parts:
- An Express.js server collect data from APIs
- Server to serve video
- JS to push data into video

## Starting API
Requires API keys, create a `.env` file in `web/`. Enter the following:
```bash
DARK_SKY_SECRET=your_api_key
FACEBOOK_SECRET=your_facebook_client_secret
FACEBOOK_ID=your_facebook_client_app_id
```
API runs in docker, run:
```bash
docker-compose up --build
```
Navigate to `http://localhost:3333`

## Watching the Video
After starting the server navigate to:
```
http://localhost:3333/video
```
