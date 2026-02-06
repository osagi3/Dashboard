import Cart from "./components/Cart";
import Clients from "./components/Clients";
import MoneySvg from "./components/MoneySvg";
import Users from "./components/Users";
import NavBar from "./NavBar";

function Dashboard() {
  return (
    <div className="flex bg-gray-200">
      <NavBar />
      <div className="flex gap-5 p-5 ">
        <div className="bg-white flex">
          <div>
            <p>chat</p>
            <p>chat</p>
          </div>
          <div>
            <MoneySvg className="w-20" />
          </div>
        </div>
        <div className="bg-white flex">
          <div>
            <p>chat</p>
            <p>chat</p>
          </div>
          <div>
            <Users className="w-20" />
          </div>
        </div>
        <div className="bg-white flex">
          <div>
            <p>chat</p>
            <p>chat</p>
          </div>
          <div>
            <Clients className="w-20" />
          </div>
        </div>
        <div className="bg-white flex">
          <div>
            <p>chat</p>
            <p>chat</p>
            <p>chat</p>
          </div>
          <div>
            <Cart className="w-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
