import { useContext, useEffect, useState } from "react";
import CurrencyContext from "./CurrencyContext";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const { currency, exchangeRate } = useContext(CurrencyContext);

  const loadBooks = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=" +
        page
    );
    const dataBooks = await response.json();
    setBooks(dataBooks);
    // console.log(dataBooks);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  useEffect(() => {
    loadBooks();
  }, [page]);

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>Latest Books</h2>

      {page > 1 ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          ⏮️
        </button>
      ) : (
        ""
      )}

      <button className="btn btn-info">{page}</button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        ⏭️
      </button>
      <div className="d-flex justify-content-between flex-wrap">
        {books.map((book) => (
          <div className="card" style={{ width: "20rem" }} key={book.id}>
            <img
              style={{ width: "100px", margin: "20px auto" }}
              className="card-img-top"
              src={book.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <br />
              <h2 className="card-text">
                {(book.price * exchangeRate).toFixed(2) + " " + currency}
              </h2>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
