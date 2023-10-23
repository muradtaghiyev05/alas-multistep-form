import { useSelector } from "react-redux";

const Finishing = () => {
  const user = useSelector((e) => e.user.value);
  return (
    <div className="Finish info">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="finish">
        <h3>Name:</h3>
        {user.name}
      </div>
      <div className="finish">
        <h3>Phone:</h3>
        {user.phone}
      </div>
      <div className="finish">
        <h3>Email:</h3>
        {user.email}
      </div>
      <div className="finish">
        <h3>Password:</h3>
        {["●", "●", "●", "●", "●"].map((symbol) => (
          <>{symbol}</>
        ))}
        {user.password.slice(5)}
      </div>
    </div>
  );
};

export default Finishing;
