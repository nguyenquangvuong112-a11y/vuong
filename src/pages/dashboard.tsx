import { Toaster } from "react-hot-toast";
import { Link,Navigate, Route, Routes } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import { useAuthStore } from "../stores/useAuthStore";
import AddStories  from "./formAdd";
import StoriesList from "./list";
import { Button } from "antd";
const Dashboard = () => {
  const { user, setUser } = useAuthStore()
    return(
        <>
         <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/stories" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
                        {user ? (
                            <>
                                <img src={user.avatar} className="w-10 h-10 rounded-full" ></img>
                                <span className="text-white">{user.name}</span>
                                <Button onClick={() => setUser(null)}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Link to="/signin" className="hover:text-gray-200">
                                    Đăng nhập
                                </Link>
                                <Link to="/signUp" className="hover:text-gray-200">
                                    Đăng ký
                                </Link>
                            </>
                        )}
                    </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>
      <Routes>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Navigate to="/stories" />}></Route>
        <Route path="/stories" element={<StoriesList></StoriesList>}></Route>
        <Route path="/add" element={<AddStories></AddStories>}></Route>
      </Routes>

      <Toaster />
        </>
    )
   
}
export default Dashboard;