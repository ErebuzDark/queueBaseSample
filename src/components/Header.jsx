import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const Header = () => {
  const [teller, setTeller] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (teller) {
      navigate(`/teller-${teller}`);
    }
  }, [teller]);
  return (
    <div className="flex flex-row justify-center gap-4">
      <NavLink to="/">Services</NavLink>
      <NavLink to="/monitor">Monitor</NavLink>
      <select onChange={(e) => setTeller(e.target.value)}>
        <option value="">Select Teller</option>
        <option value="1">Teller Pay Bills</option>
        <option value="2">Teller Consultation</option>
        <option value="3">Teller Repair</option>
        <option value="4">Teller Installation</option>
      </select>
    </div>
  );
};

export default Header;
