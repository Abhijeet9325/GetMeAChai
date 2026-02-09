# ☕ GetMeAChai – Creator Support Platform

A full-stack web platform where creators can receive financial support from their audience through secure online payments. The project features authentication, a dynamic dashboard, Razorpay test-mode payments, and a responsive UI built with modern web technologies.


# 📌 Features  

🔐 Authentication

Secure login using NextAuth

Session-based access control

Protected dashboard routes

💳 Payments (Test Mode)

Razorpay integration (Test Mode)

Dummy payments using Card / Net Banking

Secure server-side payment verification

Supporters list updates after successful payment

📊 Dashboard

Dynamic user dashboard

Update profile details:

Name

Username

Profile picture

Cover picture

Razorpay credentials

Data persists after refresh

👥 Supporters

Displays verified supporters only

Shows supporter name, message, and amount

Total amount raised calculation

🎨 UI / UX

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

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a81d9f3f-a23b-4a01-9655-14f6bced7256" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8d98c704-18d3-49e8-a91e-3f54bf335525" />

<img width="960" height="540" alt="Screenshot 2026-02-09 164021" src="https://github.com/user-attachments/assets/22ad79ed-5cc0-4bc1-bfab-1be090add4df" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3068eee2-b478-4729-9bdd-e46ea6946676" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6f92ffc5-c260-40b8-9692-6fcbfff2b95b" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/85b72f90-fe94-4529-b9b3-e1f211086174" />


📄 License

This project is for educational and portfolio purposes.

🙌 Author

Abhijit
Web Developer | Full-Stack Enthusiast
