import Header from "../components/Header/Header"
import CustomCursor from "../components/shared/CustomCursor/CustomCursor";
import SvgOverlay from "../components/shared/SvgOverlay/SvgOverlay";


const MainLayout = ({ children }) => {

    return (
      <>
        <Header />
        <CustomCursor />
        {/* <SvgOverlay /> */}
        <main className="app">
          {children}
        </main>
      </>
    );
       
}

export default MainLayout