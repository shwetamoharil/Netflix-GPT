import DropdownContent from "../common/DropdownContent";
import Dropdown from "../Icons/Dropdown";
import { dropdown_menu } from "../utils/dropdown_menu";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { addUser, removeUser } = userActions;
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
        <img
          className="w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        ></img>

        {user && (
          <div className="flex items-center">
            <img
              className="h-10 w-10"
              src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              alt="profile-icon"
            ></img>
            <Dropdown height={"24"} width={"24"} fill={"#FFFFFF"} className="cursor-pointer" />
            <div className=" px-12 py-2 absolute top-20 right-5">
              <DropdownContent menuItems={dropdown_menu} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
