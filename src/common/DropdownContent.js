import { Link } from "react-router-dom";

const DropdownContent = ({ menuItems }) => {
  return (
    <div className="w-40 bg-gray-500 bg-opacity-30 flex flex-col text-white px-4">
      {menuItems?.map((menu, index) => (
        <Link to={menu?.path} state={{ value: menu?.value }} key={index}>
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
