# Frontend - Favorite NPM Packages App

A React application for searching and managing favorite NPM packages.
### 🔗 Live Demo

👉 [Click here to view the live app](https://npm-package-app.netlify.app/)

## Installation

```bash
git clone https://github.com/priyakumari133/Betaelectic-assignment.git
cd Frontend
npm install
npm run dev
```

## Tech Stack

- **React** + **Vite**
- **JavaScript**
- **Custom CSS**
- **React Router**

## Features

- 🔍 Search NPM packages
- ⭐ Add to favorites with custom reason
- 📋 View favorites list
- 🗑️ Remove with confirmation
- 📱 Responsive design

## Folder Structure

```
src/
├── Components/
│   ├── ConfirmModal.jsx
│   ├── FavoriteCard.jsx
│   ├── Navbar.jsx
│   └── SearchForm.jsx
├── pages/
│   ├── Favorites.jsx
│   └── Search.jsx
├── styles/
│   ├── ConfirmModal.css
│   ├── FavoriteCard.css
│   ├── Favorites.css
│   ├── Navbar.css
│   ├── Search.css
│   └── SearchForm.css
├── App.jsx
└── main.jsx
```


## Screenshots
### Home Page
![Home Screenshot](screenshots/home.png)

### Favorites Page
![Favorites Screenshot](screenshots/favorites.png)


## Development

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run preview  # Preview build
```

# Backend - Checkout System API

A cart/checkout system with discount rules built with Node.js and MongoDB.

## Installation

```bash
git clone https://github.com/priyakumari133/Betaelectic-assignment.git
cd Backend
npm install

# Create .env file
PORT=3000
MONGODB_URI=mongodb://localhost:27017/checkout-system

npm run dev
```

## Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JavaScript**

## Folder Structure

```
src/
├── controllers/
│   ├── basket.controller.js
│   └── product.controller.js
├── models/
│   ├── basket.model.js
│   └── product.model.js
├── routes/
│   ├── basket.routes.js
│   └── product.routes.js
├── services/
│   ├── checkout.service.js
│   └── product.service.js
├── db/mongo.js
├── app.js
└── index.js
```

## API Endpoints

### Products
```http
GET /api/products           # Get all products
GET /api/products/:id       # Get product by ID
```

### Cart
```http
POST /api/basket/add        # Add item to cart
GET /api/basket            # Get cart with totals
DELETE /api/basket/clear    # Clear cart
```

## Request/Response Examples

### Add Item to Cart
**Request:**
```json
POST /api/basket/add
{
  "item": "A"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Item added to basket"
}
```

### Get Cart Details
**Response:**
```json
{
  "success": true,
  "data": {
    "items": [{"item": "A", "price": 30, "quantity": 2}],
    "subtotal": 60,
    "discounts": [{"type": "bulk_discount", "amount": 5}],
    "totalDiscounts": 5,
    "finalTotal": 55
  }
}
```

## Products & Pricing

| Item | Price |
|------|-------|
| A    | Rs 30 |
| B    | Rs 20 |
| C    | Rs 50 |
| D    | Rs 15 |

## Discount Rules

1. **3 × Item A** = Rs 85 (save Rs 5)
2. **2 × Item B** = Rs 35 (save Rs 5)  
3. **Total > Rs 150** = Additional Rs 20 off

## Test Cases

| Basket | Expected Total |
|--------|---------------|
| A, B, C | Rs 100 |
| B, A, B, A, A | Rs 120 |
| C, B, A, A, D, A, B | Rs 165 |

## Database Schema

```javascript
// Products
{
  item: String,    // "A", "B", "C", "D"
  price: Number    // 30, 20, 50, 15
}

// Basket
{
  items: [String]  // ["A", "B", "A"]
}
```

## Development

```bash
npm run dev    # Development mode
npm start      # Production mode
```
