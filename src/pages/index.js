import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/list/${id}`);
  };
  return (
    <>
      <Seo title="Home" />
      <div className="container">
        <h1 className="title">The New York Times Best Seller Exploer</h1>
        <div className="book-criteria-list">
          {results?.map((criterion) => (
            <div
              className="book-criteria-list__list-item"
              key={criterion.list_name}
              onClick={() => onClick(criterion.list_name_encoded)}
            >
              <Link href={`/list/${criterion.list_name_encoded}`}>
                <span>{criterion.display_name} &rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          font-weight: 600;
          margin: 45px auto 100px auto;
          font-size: 35px;
          background-color: var(--green);
          width: 65%;
          color: white;
          padding: 15px;
        }
        .book-criteria-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }
        .book-criteria-list__list-item {
          border: none;
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          font-size: 18px;
          padding: 25px 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .book-criteria-list__list-item:hover {
          background-color: var(--green);
          color: white;
          border-color: var(--green);
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("https://books-api.nomadcoders.workers.dev/lists")
  ).json();
  return {
    props: {
      results,
    },
  };
}
