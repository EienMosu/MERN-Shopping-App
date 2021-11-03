import React, { useEffect, useMemo, useState } from "react";
// Components
import Chart from "../../components/Chart";
import FeaturedInfo from "../../components/FeaturedInfo";
import WidgetSmall from "../../components/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge";
// Styled Components
import { Container, Widgets } from "./HomePage.styles";
// Chart Data
import { userData } from "../../chartData";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [userStats, setUserStats] = useState([]);
  const token = useSelector((state) => state.user.currentUser.accessToken);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await userRequest.get("/users/stats", {
          headers: { token: `Bearer ${token}` },
        });

        response.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSmall />
        <WidgetLarge />
      </Widgets>
    </Container>
  );
};

export default HomePage;
