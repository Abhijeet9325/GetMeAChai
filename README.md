# ☕ GetMeAChai – Creator Support Platform

A full-stack web platform where creators can receive financial support from their audience through secure online payments. The project features authentication, a dynamic dashboard, Razorpay test-mode payments, and a responsive UI built with modern web technologies.


# 📌 Features  

# 🔐 Authentication

Secure login using NextAuth

Session-based access control

Protected dashboard routes

# 💳 Payments (Test Mode)

Razorpay integration (Test Mode)

Dummy payments using Card / Net Banking

Secure server-side payment verification

Supporters list updates after successful payment

# 📊 Dashboard

Dynamic user dashboard

Update profile details:

Name

Username

Profile picture

Cover picture

Razorpay credentials

Data persists after refresh

# 👥 Supporters

Displays verified supporters only

Shows supporter name, message, and amount

Total amount raised calculation

# 🎨 UI / UX

Fully responsive design (mobile, tablet, desktop)

Clean modern UI using Tailwind CSS

SEO-friendly metadata for pages

No page flicker or back-button issues

🛠️ Tech Stack

# Frontend

Next.js (App Router)

React

Tailwind CSS

# Backend

Next.js Server Actions

MongoDB with Mongoose

Razorpay API (Test Mode)

Authentication

NextAuth.js

# 📂 Project Structure
app/
 ├── api/
 │   ├── auth/
 │   └── razorpay/
 ├── dashboard/
 │   ├── layout.jsx
 │   └── page.jsx
 ├── login/
 ├── about/
 ├── [username]/
 └── layout.jsx
components/
db/
models/
middleware.js

# 🔄 Payment Flow (Test Mode)

User enters name, message, and amount

Razorpay order is created on the server

Dummy payment is completed (Card / Net Banking)

Payment signature is verified on the server

Payment marked as done: true in database

Supporter appears on creator’s page

# 🧪 Dummy Payment Details (Razorpay Test Mode)
Card Payment
Card Number: 4111 1111 1111 1111
Expiry: 12/30
CVV: 123
OTP: 123456

# 🔐 Environment Variables

Create a .env.local file:

MONGODB_URI=your_mongodb_url
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=your_secret

# ▶️ Run Locally
git clone https://github.com/your-username/getmeachai.git
cd getmeachai
npm install
npm run dev


Open:
http://localhost:3000

# 🧠 Key Learnings

Next.js App Router architecture

Server vs Client Components

Secure payment verification

Session handling & route protection

Clean authentication UX (no flicker)

MongoDB data modeling

Responsive UI design

# 📸 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dac2140d-dcc6-4859-bbda-6d2331f97b9a" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8e7d1d6c-09d3-4fbe-a9ce-f978c60fa490" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3ad34120-4823-44b2-a139-d08d05588beb" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7b978dd5-a943-4ec6-ba0e-f75e3b52f940" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/aee9f485-b5f4-4943-abe7-111a24ed8d70" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2ed17042-0ea8-448f-9785-88eceb24534f" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/482f1e60-3d71-408c-95b0-2463c6f4125d" />


# 📄 License

This project is for educational and portfolio purposes.

🙌 Author

Abhijit
Web Developer | Full-Stack Enthusiast
