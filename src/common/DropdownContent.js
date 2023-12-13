const DropdownContent = ({ menuItems }) => {
  return (
    <div className="w-40 bg-black bg-opacity-80 flex flex-col text-white px-4">
      {menuItems?.map((menu) => (
        <div className="py-2 cursor-pointer flex">
          {menu?.element}
          <span className="px-2">{menu?.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DropdownContent;
