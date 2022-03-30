import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getData, reset } from "../features/data/dataSlice";
import Chart from "../components/Chart";
import { Container } from "../components/Container";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError, message } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    console.log(data);
    if (data < 1) {
      dispatch(getData());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (

      <>
      <h2>AdminDashboard</h2>
      <h3>Cash flow : </h3>
    <Container>
      {data.length > 0 && <Chart data={data} />}
    </Container>
    </>
  );
};

export default AdminDashboard;
