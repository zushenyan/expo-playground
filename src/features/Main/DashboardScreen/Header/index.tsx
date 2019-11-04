import React from "react";
import { useSelector } from "react-redux";
import { getEmail } from "@/features/services/user/selector";
import NavigationHeader from "@/components/texts/NavigationHeader";

const Header: React.FC = () => {
  const email = useSelector(getEmail);

  return <NavigationHeader title="Dashboard" subtitle={`Hello, ${email}`} />;
};

export default Header;
