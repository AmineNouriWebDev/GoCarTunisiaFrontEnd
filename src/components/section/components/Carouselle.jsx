import ImgDot from "../../../images/dot.png";
import carOne from "../../../images/car1.png";
import carTwo from "../../../images/car2.png";
import carThree from "../../../images/car3.png";
import carFour from "../../../images/car4.png";
import carFive from "../../../images/car5.png";
import carSix from "../../../images/car6.png";

// https://www.codehim.com/bootstrap/bootstrap-5-animated-cards-slider/

export default function Carouselle() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col" id="rental">
            <h2 class="text-center ">
              cars for <span class="text-primary"> rental </span>
            </h2>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel carousel-dark slide px-5"
        data-bs-ride="carousel ">
        <div class="carousel-inner  py-5">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-lg-4">
                <div class="card" style={{ width: "18rem;" }}>
                  <img
                    src={carOne}
                    class="card-img-top"
                    alt="Seat Leon TSI 2020"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-primary">Seat Leon TSI 2020</h5>
                    <div class="card-text " style={{ fontSize: "0.8em" }}>
                      <ul class="d-flex list-unstyled">
                        <li class="rental-list">city Car</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">Auto</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">4 Passengers</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <h3 class="pt-2" style={{ fontSize: "0.95rem" }}>
                        TND 479 <span class="rental-price">/day</span>
                      </h3>
                      <a
                        href="car-single.html"
                        class="btn btn-primary"
                        style={{ fontSize: "0.95rem" }}>
                        rent now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card" style={{ width: "18rem;" }}>
                  <img
                    src={carTwo}
                    class="card-img-top"
                    alt="Skoda Fabia 2024"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-primary">Skoda Fabia 2024</h5>
                    <div class="card-text " style={{ fontSize: "0.8em" }}>
                      <ul class="d-flex list-unstyled">
                        <li class="rental-list">city Car</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">Manual</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">4 Passengers</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <h3 class="pt-2" style={{ fontSize: "0.95rem" }}>
                        TND 449 <span class="rental-price">/day</span>
                      </h3>
                      <a
                        href="car-single.html"
                        class="btn btn-primary"
                        style={{ fontSize: "0.95rem" }}>
                        rent now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card" style={{ width: "18rem;" }}>
                  <img
                    src={carThree}
                    class="card-img-top"
                    alt="Suzuki Swift 2024"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-primary">Suzuki Swift 2024</h5>
                    <div class="card-text " style={{ fontSize: "0.8em" }}>
                      <ul class="d-flex list-unstyled">
                        <li class="rental-list">city Car</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">Manual</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">4 Passengers</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <h3 class="pt-2" style={{ fontSize: "0.95rem" }}>
                        TND 369 <span class="rental-price">/day</span>
                      </h3>
                      <a
                        href="car-single.html"
                        class="btn btn-primary"
                        style={{ fontSize: "0.95rem" }}>
                        rent now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-lg-4">
                <div class="card" style={{ width: "18rem;" }}>
                  <img
                    src={carFour}
                    class="card-img-top"
                    alt="Suzuki Celerio 2022"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-primary">Suzuki Celerio 2022</h5>
                    <div class="card-text " style={{ fontSize: "0.8em" }}>
                      <ul class="d-flex list-unstyled">
                        <li class="rental-list">city Car</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">Manual</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">4 Passengers</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <h3 class="pt-2" style={{ fontSize: "0.95rem" }}>
                        TND 259 <span class="rental-price">/day</span>
                      </h3>
                      <a
                        href="car-single.html"
                        class="btn btn-primary"
                        style={{ fontSize: "0.95rem" }}>
                        rent now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card" style={{ width: "18rem;" }}>
                  <img
                    src={carFive}
                    class="card-img-top"
                    alt="Skoda Fabia 2022"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-primary">Skoda Fabia 2022</h5>
                    <div class="card-text " style={{ fontSize: "0.8em" }}>
                      <ul class="d-flex list-unstyled">
                        <li class="rental-list">city Car</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">Manual</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">4 Passengers</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <h3 class="pt-2" style={{ fontSize: "0.95rem" }}>
                        TND 399 <span class="rental-price">/day</span>
                      </h3>
                      <a
                        href="car-single.html"
                        class="btn btn-primary"
                        style={{ fontSize: "0.95rem" }}>
                        rent now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card" style={{ width: "18rem;" }}>
                  <img
                    src={carSix}
                    class="card-img-top"
                    alt="Hyundai I20 BVA 2024"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-primary">
                      Hyundai I20 BVA 2024
                    </h5>
                    <div class="card-text " style={{ fontSize: "0.8em" }}>
                      <ul class="d-flex list-unstyled">
                        <li class="rental-list">city Car</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">Manual</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                        <li class="rental-list">4 Passengers</li>
                        <li class="rental-list">
                          <img src={ImgDot} class="px-3" alt="image" />
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <h3 class="pt-2" style={{ fontSize: "0.95rem" }}>
                        TND 469 <span class="rental-price">/day</span>
                      </h3>
                      <a
                        href="car-single.html"
                        class="btn btn-primary"
                        style={{ fontSize: "0.95rem" }}>
                        rent now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
