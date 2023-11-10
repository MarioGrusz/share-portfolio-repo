import CustomCursor from "../components/shared/CustomCursor/CustomCursor";



const MainLayout = ({ children }) => {

  return (
    <>
      <CustomCursor />
      {/* <SvgOverlay /> */}
      <main className="app">
        {children}
      </main>
    </>
  );
       
}

export default MainLayout