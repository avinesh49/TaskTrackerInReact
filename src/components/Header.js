import Button from "./Button";

const Header = ({title, showAdd, showAddTask}) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="black" text={showAddTask ? "Close" : "Add"} onClick={showAdd} />
    </header>
  );
};

export default Header;
