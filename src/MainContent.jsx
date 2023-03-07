import Homepage from "./Homepage";
import { useContext } from "react";
import Context from "./Context";

export default function MainContent({ page }) {
  const { context } = useContext(Context);

  let content = "";

  if (page === "") {
    content = <h2>Welcome into our bookshop</h2>;
  } else if (page === "about") {
    content = <h2>about us</h2>;
  } else if (page === "contact") {
    content = <h2>contact us</h2>;
  } else {
    content = <h2>not found</h2>;
  }

  return (
    <div className={"jumbotron jumbotron-fluid main main--" + context.theme}>
      <h1 className="display-4">
        {" "}
        Mario's Books <span className="badge badge-info">brand new!!</span>
      </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more{" "}
      </a>
      <Homepage />
    </div>
  );
}
