import react from "react";
import { Navigate } from "react-router-dom";

import Kyudo from "./Kyudo";
/**
 * Place updates/news components and slides here
 * @returns temporary redirect to kyudo page
 */
function Home() {
    return <Navigate replace to="/Kyudo" element={<Kyudo />} />;
};

export default Home;