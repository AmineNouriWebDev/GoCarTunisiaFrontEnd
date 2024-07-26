import logoFooter from "../../images/logo.png";
export default function Footer() {
  return (
    <div>
      <section id="footer">
        <div class="container footer-container mt-5">
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-5 py-5">
            <div class="col-md-4 mt-5 mt-md-0">
              <img src={logoFooter} alt="image logo footer" />
              <p class="py-3">Your road is our passion! 😊</p>
              <div class="d-flex align-items-center">
                <a href="#" target="_blank">
                  <iconify-icon
                    class="social-link-icon pe-4"
                    icon="mdi:facebook"></iconify-icon>
                </a>
                <a href="#" target="_blank">
                  <iconify-icon
                    class="social-link-icon pe-4"
                    icon="mdi:twitter"></iconify-icon>
                </a>
                <a href="#" target="_blank">
                  <iconify-icon
                    class="social-link-icon pe-4"
                    icon="mdi:instagram"></iconify-icon>
                </a>
                <a href="#" target="_blank">
                  <iconify-icon
                    class="social-link-icon pe-4"
                    icon="mdi:linkedin"></iconify-icon>
                </a>
                <a href="#" target="_blank">
                  <iconify-icon
                    class="social-link-icon pe-4"
                    icon="mdi:youtube"></iconify-icon>
                </a>
              </div>
            </div>

            <div class="col-md-7 offset-md-1 mt-5">
              <ul class="footer-nav list-unstyled">
                <li class="nav-item me-2 mb-3">
                  <a class="nav-link px-4" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item me-2 mb-3">
                  <a class="nav-link px-4" href="#">
                    Booking
                  </a>
                </li>
                <li class="nav-item me-2 mb-3">
                  <a class="nav-link px-4" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item me-2 mb-3">
                  <a class="nav-link px-4" href="#rental">
                    Cars
                  </a>
                </li>
                <li class="nav-item me-2 mb-3">
                  <a class="nav-link px-4" href="#services">
                    Services
                  </a>
                </li>
                <li class="nav-item me-2 mb-3">
                  <a class="nav-link px-4" href="#action">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>

        <footer class="d-flex flex-wrap justify-content-between align-items-center border-top"></footer>

        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 pt-4">
            <div class="col-md-6 d-flex align-items-center">
              <p>© 2024 GoCarTunisia - All rights reserved</p>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-end">
              <p class="">
                © 2023 created By:
                <a href="#" class="website-link" target="_blank">
                  <b>
                    <u>NouriWebDev</u>
                  </b>
                </a>
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
