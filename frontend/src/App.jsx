import React, { useEffect } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './Pages/HomePage';
import Dashboard from './Pages/UserDashboard/Dashboard';
import Workouts from './Workouts/workout';
import MealPlans from './Pages/MealPlans/MealPlans';
import CaloriesCalculator from './Pages/CaloriesCalculator/CaloriesCalculator';
import BMICalculator from './Pages/BMICalculator/BMICalculator';
import NotFound from './Pages/Notfound/Notfound';
import Profile from './Pages/Profile/Profile';

import PrivateRoute from './PrivateRoute';
import Layout from './Layout';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Chatbot from './components/Chatbot/Chatbot';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <AuthProvider>
        <ThemeProvider>
          <Chatbot />
          <Routes>
            <Route path='/' element={<HomePage />} />

            {/* ✅ Protected Routes wrapped in Layout */}
            <Route element={<Layout />}>
              <Route
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path='/workouts'
                element={
                  <PrivateRoute>
                    <Workouts />
                  </PrivateRoute>
                }
              />

              <Route
                path='/meal-plans'
                element={
                  <PrivateRoute>
                    <MealPlans />
                  </PrivateRoute>
                }
              />

              <Route
                path='/calories-calculator'
                element={
                  <PrivateRoute>
                    <CaloriesCalculator />
                  </PrivateRoute>
                }
              />

              <Route
                path='/bmi-calculator'
                element={
                  <PrivateRoute>
                    <BMICalculator />
                  </PrivateRoute>
                }
              />

              <Route
                path='/profile'
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />

            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </ClerkProvider>
  )
}

export default App
