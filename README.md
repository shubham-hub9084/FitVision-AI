# FitVision AI - AI-Powered Personal Trainer

FitVision AI is a next-generation fitness application designed to empower your fitness journey with advanced AI technology. It offers real-time form correction, personalized workout plans, and data-driven insights to help you achieve your health goals effectively.

![FitVision AI Banner](https://via.placeholder.com/1200x600?text=FitVision+AI+Banner)

## 🚀 Features

- **AI-Powered Workout Tracking**: Utilize your camera for real-time form analysis and rep counting.
- **Personalized Dashboard**: Track your progress, view analytics, and manage your workout schedule.
- **Comprehensive Workout Library**: Access a wide range of workout programs including Strength, HIIT, Yoga, Cardio, and Flexibility training.
- **Smart Tools**:
  - **BMI Calculator**: Calculate and track your Body Mass Index.
  - **Calories Calculator**: Estimate your daily caloric needs based on activity levels.
  - **Meal Plans**: Get customized meal suggestions to fuel your workouts.
- **Interactive Community**: Connect with like-minded individuals and stay motivated.
- **Responsive Design**: Seamless experience across all devices with a modern dark/light mode UI.

## 🛠️ Tech Stack

- **Frontend**: React (v19), Vite
- **Styling**: Tailwind CSS (v4), Framer Motion
- **Routing**: React Router DOM (v7)
- **Authentication**: Clerk
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Remix Icon, React Icons

## 📦 Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/shubham-hub9084/FitVision-AI.git
    cd FitVision-AI/frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Environment Variables:**
    Create a `.env` file in the `frontend` directory and add your Clerk publishable key:

    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. **Build for production:**

    ```bash
    npm run build
    ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Note**: This project uses camera permissions for AI workout tracking. Ensure you allow camera access when prompted to use these features.
