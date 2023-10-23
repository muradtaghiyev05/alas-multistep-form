import { useSelector } from "react-redux";
import InfoStep1 from "./components/InfoStep1";
import InfoStep2 from "./components/InfoStep2";
import Finishing from "./components/Finishing";
import ThanksStep from "./components/ThanksStep";
import NavigationButtons from "./components/NavigationButtons";
import Steps from "./components/Steps";

function App() {
  const page = useSelector((e) => e.page.value);

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <InfoStep1 />;
      case 1:
        return <InfoStep2 />;
      case 2:
        return <Finishing />;
      case 3:
        return <ThanksStep />;
    }
  };
  return (
    <main>
      <div className="Container">
        <Steps />
        <div className="content">
          {PageDisplay()}

          {page != 3 && <NavigationButtons />}
        </div>
      </div>
    </main>
  );
}

export default App;
