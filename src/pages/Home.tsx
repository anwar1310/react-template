import { changeUserName } from "@/redux/reducers/user";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const userName = useSelector((state: RootState) => state.user.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeUserName("Shaikh"));     
    }, 1000);
  }, []);

  console.log("userName =>", userName);
  return (
    <div className="container mx-auto px-4 py-4 h-[calc(100vh-80px)]">
      <div>
        This is home page
      </div>
    </div>
  );
};

export default Home;