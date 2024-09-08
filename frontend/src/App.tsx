import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FarmerSignIn from "./pages/Farmer/Auth/SignIn";
import CompanySignIn from "./pages/Company/Auth/SignIn";
import FarmerRegister from "./pages/Farmer/Auth/Register";
import CompanyRegister from "./pages/Company/Auth/Register";
import NewCropDemand from "./pages/Company/CropDemand/NewCropDemand";
import FarmerLayout from "./layouts/FarmerLayout";
import CompanyLayout from "./layouts/CompanyLayout";
import EditCropDemand from "./pages/Company/CropDemand/EditCropDemand";
import AllCropDemands from "./pages/Company/CropDemand/AllCropDemands";
import SingleCropDemand from "./pages/Company/CropDemand/SingleCropDemand";
import MyDemands from "./pages/Company/User/MyDemands";
import AllCropDemandsForFarmer from "./pages/Farmer/CropDemands/AllCropDemandsForFarmer";
import CropDemandDetails from "./pages/Farmer/CropDemands/CropDemandDetails";
import MyBids from "./pages/Farmer/User/MyBids";
import AllBidsForADemand from "./pages/Company/Bids/AllBidsForADemand";
import ViewBid from "./pages/Company/Bids/ViewBid";
import MyContractsForCompany from "./pages/Company/User/MyContractsForCompany";
import MyContractsForFarmer from "./pages/Farmer/User/MyContractsForFarmer";
import PlaceBid from "./pages/Farmer/Bids/PlaceBid";
import ViewContractForCompany from "./pages/Company/Contracts/ViewContractForCompany";
import ViewContractForFarmer from "./pages/Farmer/Contracts/ViewContractForFarmer";
import FarmerPage from "./pages/Farmer/FarmerPage";
import CompanyPage from "./pages/Company/CompanyPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route
          path="/farmer/login"
          element={
            <FarmerLayout>
              <FarmerSignIn />
            </FarmerLayout>
          }
        />
        <Route
          path="/company/login"
          element={
            <CompanyLayout>
              <CompanySignIn />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/register"
          element={
            <CompanyLayout>
              <CompanyRegister />
            </CompanyLayout>
          }
        />
        <Route
          path="/farmer/register"
          element={
            <FarmerLayout>
              <FarmerRegister />
            </FarmerLayout>
          }
        />
        <Route
          path="/crop-demands/new"
          element={
            <CompanyLayout>
              <NewCropDemand />
            </CompanyLayout>
          }
        />
        <Route
          path="/crop-demands"
          element={
            <CompanyLayout>
              <AllCropDemands />
            </CompanyLayout>
          }
        />
        <Route
          path="/crop-demands/:cropDemandId/edit"
          element={
            <CompanyLayout>
              <EditCropDemand />
            </CompanyLayout>
          }
        />
        <Route
          path="/crop-demands/:cropDemandId"
          element={
            <CompanyLayout>
              <SingleCropDemand />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/my-demands"
          element={
            <CompanyLayout>
              <MyDemands />
            </CompanyLayout>
          }
        />
        <Route
          path="crop-demands/:demandId/bids"
          element={
            <CompanyLayout>
              <AllBidsForADemand />
            </CompanyLayout>
          }
        />
        <Route
          path="crop-demands/:demandId/bids/:bidId"
          element={
            <CompanyLayout>
              <ViewBid />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/contracts/my-contracts"
          element={
            <CompanyLayout>
              <MyContractsForCompany />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/contracts/:contractId"
          element={
            <CompanyLayout>
              <ViewContractForCompany />
            </CompanyLayout>
          }
        />
        <Route
          path="/farmers/contracts/:contractId"
          element={
            <FarmerLayout>
              <ViewContractForFarmer />
            </FarmerLayout>
          }
        />

        <Route
          path="/farmers/contracts/my-contracts"
          element={
            <FarmerLayout>
              <MyContractsForFarmer />
            </FarmerLayout>
          }
        />
        <Route
          path="/farmers/crop-demands"
          element={
            <FarmerLayout>
              <AllCropDemandsForFarmer />
            </FarmerLayout>
          }
        />
        <Route
          path="/farmers/crop-demands/:demandId"
          element={
            <FarmerLayout>
              <CropDemandDetails />
            </FarmerLayout>
          }
        />
        <Route
          path="/farmers/:demandId/bids/new"
          element={
            <FarmerLayout>
              <PlaceBid />
            </FarmerLayout>
          }
        />
        <Route
          path="/farmers/my-bids"
          element={
            <FarmerLayout>
              <MyBids />
            </FarmerLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
