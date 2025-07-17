# foodlink
render
https://foodlink-frontend.onrender.com
backend
https://foodlink-2i7s.onrender.com
#  FoodLink

FoodLink is a full-stack web application that connects food donors to communities in need. Built with React (Vite) on the frontend and Express.js + MongoDB Atlas on the backend, it allows users to log in, track donation analytics, and manage food items via a dashboard.

---

##  Features

-  Live donation tracking
-  Admin dashboard with food analytics
-  User login and registration
-  MongoDB Atlas for data storage
-  Responsive design using Tailwind CSS



##  Project Structure


##  Technologies Used

| Frontend       | Backend        | Database        |
|----------------|----------------|-----------------|
| React + Vite   | Node + Express | MongoDB Atlas   |
| Tailwind CSS   | Axios          | Mongoose        |
| React Router   | JWT Auth       | Compass (GUI)   |


---

## 📦 Setup Instructions

### 1. Clone the repo

```bash

git clone https://github.com/gatuati/foodlink.git
cd client && npm install
cd ../server && npm install
PORT=5000
MONGO_URI=your_atlas_uri_here
JWT_SECRET=your_jwt_secret
VITE_API_URL=https://foodlink.onrender.com
cd server && npm run start
cd client && npm run dev

