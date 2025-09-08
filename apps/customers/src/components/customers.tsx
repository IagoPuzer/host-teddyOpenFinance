import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userService";
import Layout from "./layout";

export default function Customers() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  console.log(data);

  return (
    <Layout>
      <h1>APLICAÇÃO CUSTOMERSss</h1>
    </Layout>
  );
}
