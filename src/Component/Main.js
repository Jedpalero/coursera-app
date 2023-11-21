import { Routes } from "react-router-dom";
import Header from "./Header";
import BookingPage from "./BookingPage";

const Main = () => {
  return (
    <main>
      <Routes path="/" element={<Header />} />
      <Routes path="/booking" element={<BookingPage />} />
    </main>
  );
};
export default Main;
