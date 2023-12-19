import { useState } from "react";
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
import { DEFAULT_USER_AVATAR, LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const { addUser, removeUser } = userActions;
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const unsubscribeFn = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribeFn();
  }, []);

  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-52" src={LOGO} alt="logo"></img>

        {user && (
          <div className="flex items-center">
            <img className="h-10 w-10" src={DEFAULT_USER_AVATAR} alt="profile-icon"></img>
            <div className="cursor-pointer" onClick={() => setOpenDropdown(!openDropdown)}>
              <Dropdown height={"24"} width={"24"} fill={"#FFFFFF"} className="cursor-pointer" />
            </div>
            {openDropdown && (
              <div className=" px-12 py-2 absolute top-20 right-5">
                <DropdownContent menuItems={dropdown_menu} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
