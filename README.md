# MunchIt Backend

Welcome to the backend repository of MunchIt, the cutting-edge food ordering platform that's changing the way you enjoy your favorite meals! 🍔🥗🌮

## About MunchIt

MunchIt is a full-stack food ordering web app and mobile app built with the powerful MERN stack (MongoDB, Express.js, React.js, Node.js), enhanced with TypeScript for security and code clarity. The backend part of MunchIt is responsible for managing the server-side logic, database interactions, and APIs.

## Features

- User Authentication: Secure user authentication handled by Auth0 ensures data safety and access control.
  
- Order Management: Backend APIs handle order creation, management, and status updates, providing a seamless experience for users and restaurant owners.

- Menu Management: APIs for managing restaurant menus, including adding, updating, and deleting items.

- Insights and Analytics: APIs for gathering valuable insights into order data to optimize menus and target marketing efforts.

## Getting Started

1. **Clone the Repository**: 
git clone https://github.com/rehneet11/munchit-backend.git


2. **Install Dependencies**: 
cd munchit-backend
npm install


3. **Set Up Environment Variables**: 
Create a `.env` file in the root directory and add the necessary environment variables. Example:
-AUTH0_AUDIENCE=your-auth0-audience
-AUTH0_ISSUER_BASE_URL=your-auth0-issuer-base-url
-CLOUDINARY_API_KEY=your-cloudinary-api-key
-CLOUDINARY_API_SECRET=cloudinary-api-secret
-FRONTEND_URL=your-frontend-url
-MONGODB_CONNECTION_STRING=your-mongodb-connection-string
-STRIPE_API_KEY=your-stripe-api-key
-STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret


4. **Start the Development Server**: 
npm run dev


5. **Access MunchIt APIs**: 
Once the server is running, you can access the MunchIt backend APIs using tools like Postman or directly from the frontend application.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- TypeScript
- Auth0

## Contributing

We welcome contributions from everyone! To contribute to MunchIt, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.


