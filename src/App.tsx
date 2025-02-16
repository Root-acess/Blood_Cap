import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './Pages/Hero';
import Feature from './Pages/Feature';
import Footer from './Components/Footer';
import StarCard from './Components/StarCard';
import Navbar from './Components/Navbar';
import Faq from './Pages/Faq';
import Contactus from './Pages/Contactus';
import Gallery from './Pages/Gallery';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import Dashboard from './Pages/Dashboard';
import DonateBlood from './Dashboard/Blood/DonateBlood';
import BloodRequests from './Dashboard/Blood/BloodRequests';
import DonorList from './Dashboard/Blood/DonorList';
import Profile from './Dashboard/Profile';
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from './AuthContext';
import Registration from './Dashboard/Blood/Registration';
import BloodDonationEvents from './Dashboard/Blood/Events';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScheduleCheckup from './Dashboard/ScheduleCheckup';
import ResultPage from './Dashboard/ResultPage';
import RequestServices from './Dashboard/RequestService';
import TherapySessions from './Dashboard/MentalHealthSupport/TherapySessions';
import CounselingPage from './Dashboard/MentalHealthSupport/CounselingPage';
import StressManagementPage from './Dashboard/MentalHealthSupport/StressManagementPage';
import PrenatalCarePage from './Dashboard/WomwnHealth/PrenatalCarePage';
import MenopauseSupportPage from './Dashboard/WomwnHealth/MenopauseSupportPage';
import GynecologyPage from './Dashboard/WomwnHealth/GynecologyPage';
import DietPlansPage from './Dashboard/Nutrition/DietPlansPage';
import NutritionGuidancePage from './Dashboard/Nutrition/NutritionGuidancePage';
import SupplementsPage from './Dashboard/Nutrition/SupplementsPage';
import Consultation from './Dashboard/Blood/consultation';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavBarRoutes = [
    "/dashboard", "/dashboard/overview", "/dashboard/donate", 
    "/dashboard/requests", "/dashboard/donors", "/dashboard/profile","/dashboard/events", 
    "/signin", "/signup","/dashboard/schedule-checkup", "/dashboard/view-results" ,"/dashboard/request-services","/dashboard/consultation",
    "/dashboard/therapy-sessions","/dashboard/counseling","/dashboard/stress-management","/dashboard/prenatal-care","/dashboard/menopause-support",
    "/dashboard/gynecology","/dashboard/diet-plans", "/dashboard/nutrition-guidance","/dashboard/supplements"
  ];

  const shouldHideNavbar = hideNavBarRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target instanceof HTMLAnchorElement && target.hash) {
        e.preventDefault();
        const targetId = target.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Layout>
            <main>
              <Routes>
                <Route path="/" element={
                  <>
                    <section id="home">
                      <Hero />
                    </section>
                    <section id="feature">
                      <Feature />
                    </section>
                    <section id="card">
                      <StarCard />
                    </section>
                    <section id="gallery">
                      <Gallery />
                    </section>
                    <section id="faq">
                      <Faq />
                    </section>
                    <section id="contactus">
                      <Contactus />
                    </section>
                    <section id="footer">
                      <Footer />
                    </section>
                  </>
                } />
                <Route path="/signup" element={<Signup onClose={() => console.log("Signup closed")} />} />
                <Route path="/signin" element={<Signin />} />

                {/* Protect the dashboard route */}
                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="registration" element={<Registration />} />
                    <Route path="donate" element={<DonateBlood />} />
                    <Route path="requests" element={<BloodRequests />} />
                    <Route path="donors" element={<DonorList />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="events" element={<BloodDonationEvents />} />
                    <Route path="schedule-checkup" element={<ScheduleCheckup />} />
                    <Route path="view-results" element={<ResultPage />} />
                    <Route path="request-services" element={<RequestServices />} />
                    <Route path="consultation" element={<Consultation />} />
                    <Route path="therapy-sessions" element={<TherapySessions />} />
                    <Route path="counseling" element={<CounselingPage />} />
                    <Route path="stress-management" element={<StressManagementPage />} />
                    <Route path="prenatal-care" element={<PrenatalCarePage />} />
                    <Route path="menopause-support" element={<MenopauseSupportPage />} />
                    <Route path="gynecology" element={<GynecologyPage />} />
                    <Route path="diet-plans" element={<DietPlansPage />} />
                    <Route path="nutrition-guidance" element={<NutritionGuidancePage />} />
                    <Route path="supplements" element={<SupplementsPage />} />
                  </Route>
                </Route>
              </Routes>
            </main>
          </Layout>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
