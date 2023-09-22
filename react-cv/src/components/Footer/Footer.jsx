import './footer.css'

function Footer() {
  return (
    <footer className="footer text-center text-white" id="contact">
      <div className="container pt-4">
        <div>
          <a
            className="btn btn-floating btn-lg m-1"
            href="https://www.linkedin.com/in/pablo-bartolomé-gallardo-8167a81b4/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="https://github.com/barthxc"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="https://twitter.com/bart_hxc"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-floating btn-lg m-1"
            href="mailto:barthxc.business@gmail.com"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <p>@Copyright BartHxC</p>
    </footer>
  );
}

export default Footer;
