import Seo from "@/components/Seo";

export default function Detail({ results }) {
  const onClickPurchase = (bookUrl) => {
    window.open(bookUrl, "_blank");
  };
  return (
    <>
      <Seo title={results.display_name} />
      <div className="container">
        <h1 className="title">{results.display_name}</h1>
        <div className="book-list">
          {results.books.map((book) => (
            <div className="book-list__book" key={book.rank}>
              <img src={book.book_image} alt={book.rank} />
              <div className="book-list__book__detail">
                <span className="book-list__book__detail__title">
                  {book.title}
                </span>
                <span className="book-list__book__detail__author">
                  {book.author}
                </span>
                <div className="book-list__book__detail__btn">
                  <button
                    onClick={() => onClickPurchase(book.amazon_product_url)}
                  >
                    Buy now &rarr;
                  </button>
                </div>
              </div>
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
          width: 50%;
          color: white;
          padding: 15px;
        }
        .book-list {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px;
        }
        .book-list__book {
          box-shadow: 5px 10px 10px 3px rgb(0, 0, 0, 0.5);
          width: 250px;
          transition: all 0.2s ease-in-out;
        }
        .book-list__book:hover {
          box-shadow: 5px 10px 10px 5px var(--green);
        }
        .book-list__book img {
          width: 250px;
          height: 300px;
        }
        .book-list__book__detail {
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
        .book-list__book__detail span {
          margin-bottom: 15px;
        }
        .book-list__book__detail__title {
          font-size: 18px;
        }
        .book-list__book__detail__author {
          font-size: 15px;
          color: var(--green);
        }
        .book-list__book__detail__btn button {
          padding: 5px 7px;
          border: 1px solid rgba(0, 0, 0);
          background-color: inherit;
          cursor: pointer;
          border-radius: 7px;
          transition: all 0.2s ease-in-out;
        }
        .book-list__book__detail__btn button:hover {
          background-color: var(--green);
          border-color: var(--green);
          color: white;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
