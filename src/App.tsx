import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import DashboardHome from './pages/Dashboard/DashboardHome';
import LearningPaths from './pages/Dashboard/LearningPaths';
import Profile from './pages/Dashboard/Profile';
import Billing from './pages/Dashboard/Billing';
import Progress from './pages/Dashboard/Progress';
import Help from './pages/Dashboard/Help';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import NicheSelection from './pages/Dashboard/NicheSelection';
import TutorialCreationWizard from './pages/Dashboard/TutorialCreationWizard';
import TutorialProgress from './pages/Dashboard/TutorialProgress';
import TutorialViewer from './pages/Dashboard/TutorialViewer';
import Library from './pages/Dashboard/Library';
import TutorialEditor from './pages/Dashboard/TutorialEditor';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/dashboard" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
        <Route path="/dashboard/learning-paths" element={<DashboardLayout><LearningPaths /></DashboardLayout>} />
        <Route path="/dashboard/progress" element={<DashboardLayout><Progress /></DashboardLayout>} />
        <Route path="/dashboard/help" element={<DashboardLayout><Help /></DashboardLayout>} />
        <Route path="/dashboard/billing" element={<DashboardLayout><Billing /></DashboardLayout>} />
        <Route path="/dashboard/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
        <Route path="/dashboard/niches" element={<DashboardLayout><NicheSelection /></DashboardLayout>} />
        <Route path="/dashboard/create-tutorial" element={<DashboardLayout><TutorialCreationWizard /></DashboardLayout>} />
        <Route path="/dashboard/tutorial-progress" element={<DashboardLayout><TutorialProgress /></DashboardLayout>} />
        <Route path="/dashboard/tutorial-viewer" element={<DashboardLayout><TutorialViewer /></DashboardLayout>} />
        <Route path="/dashboard/library" element={<DashboardLayout><Library /></DashboardLayout>} />
        <Route path="/dashboard/editor/:id" element={<DashboardLayout><TutorialEditor /></DashboardLayout>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;