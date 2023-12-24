import "./Waiting.css";
function Waiting({display}) {
  return (
    <div className="Waiting" data-display={display}>
      <div>لطفاً صبر کنید</div>
    </div>
  );
}

export default Waiting;
