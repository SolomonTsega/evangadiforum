import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthContext/AuthContext"; // Import AuthProvider
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./Pages/Home/Home";
import SignUpPage from "./Pages/AuthPage/AuthPage";
import Layout from "./components/Layout/Layout";
import Questions from "./Pages/Questions/Question";
// import Answer from "./Pages/Answer/Answer";
import PostAnswer from "./Pages/postAnswerpage/PostAnswer";
import { disableReactDevTools } from "@fvilers/disable-react-devtools"; 
if (process.env.NODE_ENV === 'production')    disableReactDevTools();

const App = () => (
  <AuthProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/question/:question_id"
            element={
              <ProtectedRoute>
                <PostAnswer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ask"
            element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  </AuthProvider>
);

export default App;
