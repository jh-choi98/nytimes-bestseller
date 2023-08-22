import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="overview">
        <div>{children}</div>
      </div>
      <style jsx>{`
        .overview {
          max-width: 100vw;
          hegith: 100vh;
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 30px auto;
          background-color: white;
          padding-top: 80px;
          padding-bottom: 50px;
        }
      `}</style>
    </>
  );
}
