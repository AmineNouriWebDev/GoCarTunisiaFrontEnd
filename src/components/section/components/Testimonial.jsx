import testimonialOne from "../../../images/testimonial1.jpg";
import testimonialTwo from "../../../images/testimonial2.png";
import testimonialThree from "../../../images/testimonial3.png";
export default function Testimonial() {
  return (
    <div>
      <section class="client pt-3 pb-5">
        <div class="container">
          <div class="row text-center">
            <div class="col-12">
              <h1 class="display-3 fw-bold text-white" id="testimonial">
                Testimonials
              </h1>
              <hr
                class="bg-white mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "100px", height: "3px" }}
              />
              <p class="p-text text-white">What our clients are saying</p>
            </div>
          </div>
          <div class="row align-items-md-center text-white">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row p-4">
                      <div class="t-card">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p class="lh-lg testimonial-color">
                          {" "}
                          I rented a car from you for my trip to Sousse. The
                          service was impeccable, the car clean and well
                          maintained. I highly recommend !
                        </p>
                        <i class="fa fa-quote-right" aria-hidden="true"></i>
                        <br />
                      </div>
                      <div class="row">
                        <div class="col-sm-2 pt-3">
                          <img
                            src={testimonialOne}
                            class="rounded-circle img-responsive img-fluid"
                          />
                        </div>
                        <div class="col-sm-10">
                          <div class="arrow-down d-none d-lg-block"></div>
                          <h4>
                            <strong>Nadia Ben Salah</strong>
                          </h4>
                          <p class="testimonial_subtitle">
                            <span>Lawyer</span>
                            <br />
                            <span></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row p-4">
                      <div class="t-card">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p class="lh-lg testimonial-color">
                          {" "}
                          Your rental agency saved my day during my stay in
                          Tunis. The car was ready on time, and the staff was
                          very professional
                        </p>
                        <i class="fa fa-quote-right" aria-hidden="true"></i>
                        <br />
                      </div>
                      <div class="row">
                        <div class="col-sm-2 pt-4">
                          <img
                            src={testimonialTwo}
                            class="rounded-circle img-responsive img-fluid"
                          />
                        </div>
                        <div class="col-sm-10">
                          <div class="arrow-down d-none d-lg-block"></div>
                          <h4>
                            <strong>Ahmed Khelifi</strong>
                          </h4>
                          <p class="testimonial_subtitle">
                            <span>digital strategist</span>
                            <br />
                            <span>Vaxa digital</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row p-4">
                      <div class="t-card">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p class="lh-lg testimonial-color">
                          I have been a loyal customer for years. Your car fleet
                          is varied, and the prices are competitive. Thank you
                          for your excellent service!
                        </p>
                        <i class="fa fa-quote-right" aria-hidden="true"></i>
                        <br />
                      </div>
                      <div class="row text-lg-start">
                        <div class="col-sm-2 pt-4 align-items-center">
                          <img
                            src={testimonialThree}
                            class="rounded-circle img-responsive img-fluid"
                          />
                        </div>
                        <div class="col-sm-10">
                          <div class="arrow-down d-none d-md-block"></div>
                          <h4>
                            <strong>Leila Ammar</strong>
                          </h4>
                          <p class="testimonial_subtitle">
                            <span>Web Technologist</span>
                            <br />
                            <span>next digital</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="controls push-right">
                <a
                  class="left bi bi-arrow-left-circle-fill text-white btn btn btn-outline-light"
                  href="#carouselExampleCaptions"
                  data-bs-slide="prev"></a>
                <a
                  class="right bi bi-arrow-right-circle-fill text-white btn btn btn-outline-light"
                  href="#carouselExampleCaptions"
                  data-bs-slide="next"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
