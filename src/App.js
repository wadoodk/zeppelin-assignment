import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ServiceStaffPage from './Pages/ServiceStaffPage';
import './App.css';
import PageLayout from './Components/Layout/PageLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PageLayout />}> */}
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
          <Route
            path="/service-staff"
            element={
              <PageLayout>
                <ServiceStaffPage />
              </PageLayout>
            }
          />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
