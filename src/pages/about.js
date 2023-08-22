import Seo from "@/components/Seo";

export default function About() {
  return (
    <>
      <Seo title="About" />
      <h1>About Us</h1>
      <div className="container">
        <p>
          Welcome to the official explorer for The New York Times Best Seller
          list
          <br /> We hope you enjoy your stay!
        </p>
      </div>
      <style jsx>{`
        h1 {
          text-align: center;
          font-weight: 600;
          margin: 45px auto 100px auto;
          font-size: 35px;
          background-color: var(--green);
          width: 50%;
          color: white;
          padding: 15px;
        }
        .container {
          height: 100vh;
        }
        .container p {
          font-size: 30px;
          line-height: 3rem;
        }
      `}</style>
    </>
  );
}
