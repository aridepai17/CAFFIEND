# CAFFIEND

![Caffiend WebApp](caffiend\picture\caffiendapp.png)

### 🌐 TRY CAFFIEND  
👉 [Live Demo on Netlify](https://caffiendcoffeetracker.netlify.app/)  
Track your caffeine habits in real-time — with stats, history, and more!

## 📖 Overview

Caffiend is a web application designed for coffee enthusiasts to track their caffeine consumption and spending habits. The app allows users to monitor their coffee intake, calculate current caffeine levels in their system, and analyze their coffee consumption patterns over time.

## ✨ Features

- **User Authentication**: Secure signup and login functionality
- **Coffee Tracking**: Log different types of coffee, costs, and consumption times
- **Caffeine Level Monitoring**: Track active caffeine levels in your system based on coffee's half-life
- **Consumption Statistics**: View metrics like daily caffeine intake, average number of coffees, costs, and more
- **Coffee History**: Timeline of your coffee consumption with detailed information

## 🧰 Tech Stack

- **Frontend**: React.js
- **Styling**: [FantaCSS](https://www.fantacss.smoljames.com) design library
- **Authentication & Database**: Firebase (Authentication, Firestore)
- **Hosting**: Netlify

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aridepai17/CAFFIEND.git
   cd CAFFIEND
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password) and Firestore Database
   - Create a `.env` file in the root directory with your Firebase config:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
caffiend/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Authentication.jsx
│   │   ├── CoffeeForm.jsx
│   │   ├── Hero.jsx
│   │   ├── History.jsx
│   │   ├── Layout.jsx
│   │   ├── Modal.jsx
│   │   └── Stats.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   └── utils/
│       └── index.js
├── .env
├── .gitignore
├── eslint.config.js
├── firebase.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## 🧠 How It Works

1. **Signup/Login**: Users can create an account or login to track their coffee consumption.
2. **Add Coffee Entry**: Select a coffee type, enter the cost, and specify how long ago it was consumed.
3. **View Stats**: See your current caffeine level and other statistics about your coffee consumption.
4. **Coffee History**: View your complete coffee consumption history with a detailed timeline.

## 🔬 Science Behind It

Caffiend uses caffeine's half-life (approximately 5 hours) to calculate the remaining caffeine in your system. If you drink coffee with 200mg of caffeine, after 5 hours, you'll still have about 100mg of caffeine in your system.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

- **[aridepai17](https://github.com/aridepai17/)**

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [FantaCSS](https://www.fantacss.smoljames.com) - The design library used for styling
- [Firebase](https://firebase.google.com/) - Authentication and database services
- [Netlify](https://www.netlify.com/) - Hosting platform
