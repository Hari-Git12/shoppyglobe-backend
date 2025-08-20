📦 ShoppyGlobe Backend API

This is the backend for ShoppyGlobe E-commerce Application built using Node.js, Express, and MongoDB.
It provides RESTful APIs for products, shopping cart, and user authentication with JWT.

🚀 Features

Node.js + Express server setup

MongoDB integration for Products & Cart collections

CRUD operations for products and cart items

JWT authentication & protected routes

Input validation & error handling

Tested with ThunderClient

🗂️ Project Structure
shoppyglobe-backend/
│── models/            # Mongoose models (Product, Cart, User)
│── routes/            # Express routes (products, cart, auth)
│── middleware/        # JWT middleware
│── .env               # Environment variables
│── index.js           # Entry point
│── package.json
│── README.md
│── screenshots/       # ThunderClient & MongoDB test screenshots

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/<your-username>/shoppyglobe-backend.git
cd shoppyglobe-backend


Install dependencies:

npm install


Create a .env file in root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
JWT_SECRET=your_jwt_secret


Start the server:

npm start


Server will run on http://localhost:5000

🛠️ API Endpoints
🔹 Product Routes

GET /products → Fetch all products

GET /products/:id → Fetch product by ID

POST /products → Add new product (Admin use)

PUT /products/:id → Update product

DELETE /products/:id → Delete product

🔹 Cart Routes (Protected)

POST /cart → Add product to cart

PUT /cart/:id → Update product quantity

DELETE /cart/:id → Remove product from cart

🔹 Auth Routes

POST /register → Register a new user

POST /login → Login & get JWT token

🔒 Authentication & Authorization

Login to get JWT token.

Use token in headers for protected routes:

Authorization: Bearer <your_token>

🧪 Testing (ThunderClient)

All routes tested with ThunderClient

Screenshots included in /screenshots/ folder:

Product APIs

Cart APIs (with JWT auth)

User Register/Login

🗄️ MongoDB Collections

Products → { name, price, description, stock }

Cart → { userId, productId, quantity }

Users → { name, email, passwordHash }

📸 Screenshots

MongoDB Compass → Products & Cart collections

ThunderClient → API test results

(Screenshots available in screenshots/ folder)
