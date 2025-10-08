🎨 IMAGIFY-AI-Image-Generator
Transform your imagination into stunning images with the power of AI.

✨ Features
🖌️ Text-to-Image Generation: Enter your prompt, get beautiful AI images.

🔑 Authentication: Secure Login & Registration.

💳 Payments: Purchase credits easily (Razorpay, INR).

🏅 Credit System: Track how many images you can generate.

⚡ Modern UI: Blazing-fast, responsive experience.

🔔 Notifications: Real-time success/error toasts.

🏗️ Project Structure
text
IMAGIFY-AI-Image-Generator/
│
├── client/   # React Frontend
│   ├── public/
│   ├── src/
│   └── ...
│
├── server/   # Express Backend
│   ├── config/
│   ├── controllers/
│   ├── ... 
│
├── .gitignore
└── README.md
🚀 Tech Stack
Frontend: ReactJS + TailwindCSS + Vite

Backend: ExpressJS + MongoDB + JWT + Razorpay

🛠️ Quickstart
1. Clone Repository
bash
git clone https://github.com/krishnagopal-1/IMAGIFY-AI-Image-Generator.git
cd IMAGIFY-AI-Image-Generator
2. Environment Variables
Create .env in both client/ and server/ folders.

Sample for server/.env:

bash
MONGO_URI=your_mongo_uri
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
3. Install Dependencies
bash
cd server && npm install
cd ../client && npm install
4. Run Locally
bash
# In two terminals
cd server && npm run server
cd client && npm run dev
5. Explore
Open your browser at localhost:5173.

🤝 Contributing
Pull requests & issues welcome!

Fork the repo

Create your feature branch 🚀

Open a PR

📄 License
Licensed under ISC.
Feel free to use, share & improve!

Unleash your creativity with IMAGIFY!🎨
