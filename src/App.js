import "./App.css";
import CompliantsForm from "./components/compliantsForm";

function App() {
  return (
      <div className="apk">
        <div className="mt-0 mb-0 col-md-3 offset-1">
            <h3 className="text-center">Customer Compliant Form</h3>
            <hr/>
            <CompliantsForm/>
        </div>
      </div>
  );
}

export default App;