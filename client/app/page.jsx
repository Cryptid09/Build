"use client";
import NavBar from "@/components/Navbar";
import Team from "@/components/FAQ";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Doc from "@/components/Doc";
import UploadComponent from "@/components/UploadComponent";
import StatusComponent from "@/components/StatusComponent";
const home = () => {
  return (
    <div>
      <NavBar />
      <UploadComponent />
      <StatusComponent />
      <Doc />
      <Team />
      <Loader />
      <Footer />
    </div>
  );
};

export default home;
