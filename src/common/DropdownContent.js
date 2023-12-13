import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

const DropdownContent = ({ menuItems }) => {
  const dispatch = useDispatch();
  const { removeUser } = userActions;

  const clickHandler = (menu) => {
    if (menu?.value === "sign-out") {
      dispatch(removeUser());
    }
  };

  return (
    <div className="w-40 bg-black bg-opacity-80 flex flex-col text-white px-4">
      {menuItems?.map((menu, index) => (
        <Link to={menu?.path} onClick={() => clickHandler(menu)} key={index}>
          <div className="py-2 cursor-pointer flex">
            {menu?.element}
            <span className="px-2">{menu?.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DropdownContent;
