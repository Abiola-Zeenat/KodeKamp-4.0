const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center pt-5 ms-5 me-5">
      <div>
        <h4>
          Hello Evano{" "}
          <span role="img" aria-label="wave">
            👋,
          </span>
        </h4>
      </div>
      <div>
        <input
          type="text"
          className="form-control border-0 text-grey"
          placeholder="Search"
        />
      </div>
    </header>
  );
};

export default Header;
