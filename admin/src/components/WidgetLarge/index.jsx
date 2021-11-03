import React, { useEffect, useState } from "react";
// Redux
import { useSelector } from "react-redux";
// Axios
import { userRequest } from "../../requestMethods";
// Timeago.js
import { format } from "timeago.js";
// Styled Components
import {
  Amount,
  Button,
  Container,
  Date,
  Image,
  Status,
  Table,
  Td,
  Th,
  Title,
  Tr,
  Username,
} from "./WidgetLarge.styles";
// Images
import woman1 from "../../assets/woman6.jpg";

const WidgetLarge = () => {
  const token = useSelector((state) => state.user.currentUser.accessToken);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await userRequest.get("orders", {
          headers: { token: `Bearer ${token}` },
        });

        setOrders(response.data);
      } catch {}
    };
    getOrders();
  }, [orders, token]);

  const MyButton = ({ type, color }) => {
    return <Button color={color}>{type}</Button>;
  };

  return (
    <Container>
      <Title>Lastest Transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        {orders.map((order) => (
          <Tr key={order._id}>
            <Td>
              <Image src={woman1} />
              <Username>{order.userId}</Username>
            </Td>
            <Date>{format(order.createdAt)}</Date>
            <Amount>{order.amount}</Amount>
            <Status>
              <MyButton color="#00b8d8" type={order.status} />
            </Status>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default WidgetLarge;
