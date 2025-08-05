# Vercel Backend API

This is a serverless backend deployed on Vercel using Node.js and MongoDB. It includes two API endpoints:

## 📦 Endpoints

- `GET /api/v1/getdata` → Fetch feedback data from MongoDB
- `POST /api/v1/postdata` → Submit feedback to MongoDB

## 🛠 Tech Stack

- Node.js
- MongoDB (via Mongoose)
- Vercel Serverless Functions

## 🧪 Sample Response

```json
{
  "message": "success",
  "data": [
    {
      "name": "krishnaveni",
      "message": "Nice one , keep it up",
      "rating": 5,
      "date": "Fri Aug 01 2025",
      "time": "12:04:54"
    }
  ]
}
