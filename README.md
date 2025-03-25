# HireView 🎤💼  

🚀 **Live Demo**: [HireView](https://hire-view-ehshan.vercel.app/)  

## 🏆 Achievements  

✅ 5th Position at Cube Innovators Hackathon, IIT Delhi  

✅ Part of Marg Darshak, an initiative for education & career guidance  

✅ Pitched Marg Darshak to WSCube CEO  

## 🛠 Tech Stack  

- **Framework**: Next.js (App Router)  
- **Styling**: Tailwind CSS + ShadCN Components  
- **Authentication**: Clerk  
- **Database**: NeonDB (PostgreSQL) + Drizzle ORM  
- **AI**: Google Generative AI (Gemini API)  
- **State Management**: React Hooks & Context API  
- **Utilities**: UUID, Moment.js, Framer Motion, Lucide Icons  

## 🚀 Features  

✅ AI-generated interview questions  

✅ Real-time speech-to-text conversion  

✅ Candidate evaluation & feedback  

✅ Video interview recording  

✅ Seamless authentication with Clerk  

✅ Smooth animations with Framer Motion  

📦 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/yourusername/hire-view.git
cd hire-view

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env.local file and add your API keys & database credentials:

DATABASE_URL=your_neon_db_url
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key
GOOGLE_AI_API_KEY=your_google_gemini_api_key

4️⃣ Run the Development Server

npm run dev

🔨 Project Setup

Below is a step-by-step guide on setting up the project:
1️⃣ Create Next.js App

npx create-next-app@latest

    Selected JavaScript

    Enabled App Router

    Enabled Tailwind CSS

2️⃣ Install ShadCN Components

npx shadcn@latest init
npx shadcn@latest add button dialog input textarea sonner collapsible

3️⃣ Install Dependencies

npm install @clerk/nextjs  
npm install drizzle-orm @neondatabase/serverless  
npm install -D drizzle-kit  
npm install @google/generative-ai  
npm install uuid moment react-webcam react-hook-speech-to-text  
npm install framer-motion lucide-react  

4️⃣ Database Setup (Neon)

    Configured NeonDB using Drizzle ORM

    Used Drizzle-Kit for migrations

5️⃣ Tailwind Configuration

Updated tailwind.config.js to customize ShadCN component colors. (Search for "change" in the file to locate edits.)
6️⃣ Fixed JSON Parse Error

Modified Gemini AI prompt to ensure the API response is always a valid JSON object.

🌟 Contributing

Want to improve HireView? Feel free to fork, create a branch, and submit a PR! 🚀
📜 License

This project is licensed under the MIT License.

Let me know if you need any more refinements! 🚀🔥

