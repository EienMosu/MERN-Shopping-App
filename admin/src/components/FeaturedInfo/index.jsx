import React, { useEffect, useState } from "react";
// Material UI Icons
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// Axios
import { userRequest } from "../../requestMethods";
// Redux
import { useSelector } from "react-redux";
// Styled Components
import {
  Container,
  Item,
  Money,
  MoneyContainer,
  MoneyRate,
  Sub,
  Title,
} from "./FeaturedInfo.styles";

const FeaturedInfo = () => {
  const token = useSelector((state) => state.user.currentUser.accessToken);

  const [income, setIncome] = useState(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const response = await userRequest.get("orders/income", {
          headers: { token: `Bearer ${token}` },
        });

        setIncome(response.data);
        setPercent(
          (response.data[1].total * 100) / response.data[0].total - 100
        );
      } catch {}
    };
    getIncome();
  }, []);

  console.log(percent);
  return (
    <Container>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>{income ? income[1].total : "$0"}</Money>
          <MoneyRate>
            -11.4
            <ArrowDownward style={{ color: "red" }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$4.485</Money>
          <MoneyRate>
            -9.2
            <ArrowDownward style={{ color: "red" }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$3.231</Money>
          <MoneyRate>
            +1.2
            <ArrowUpward style={{ color: "green" }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
