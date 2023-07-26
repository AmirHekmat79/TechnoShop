import "./index.scss";

const LayoutBlank = ({ children }) => {
  return (
    <main>
      <div className="pages-container">{children}</div>
    </main>
  );
};

export default LayoutBlank;
