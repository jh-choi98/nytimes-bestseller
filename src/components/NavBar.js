import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          font-size: 30px;
          margin-bottom: 30px;
          padding: 40px 55px;
        }
        nav div {
          color: white;
        }
      `}</style>
    </nav>
  );
}
