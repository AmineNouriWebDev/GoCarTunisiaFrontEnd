export default function Faq() {
  return (
    <div>
      <section id="faq">
        <div class="container my-5 py-5">
          <h2 class="text-center my-5">
            We’ve got <span class="text-primary"> answers</span>
          </h2>

          <div
            class="accordion col-md-8 offset-md-2"
            id="accordionPanelsStayOpenExample">
            <div class="accordion-item mt-3">
              <h5 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">
                  Why to believe with GoCar Car rental service ?
                </button>
              </h5>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <p>
                    GoCarTunisia is an ideal choice for several reasons:
                    <li>
                      Varied fleet: We offer a wide range of vehicles, from
                      economical to luxurious, to meet all needs. needs.
                    </li>
                    <li>
                      Competitive pricing: Our prices are competitive and
                      transparent.
                    </li>
                    <li>
                      Quality customer service: Our team is available to help
                      you at any time.
                    </li>
                    <li>
                      Flexible options: Choose from our mileage packages and
                      return options.
                    </li>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="accordion-item mt-3">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo">
                  How to know which renting price price is best?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <p>
                    <li>Compare prices between different rental agencies.</li>
                    <li>
                      Consider the vehicle type, mileage included and additional
                      options.
                    </li>
                    <li>
                      Think about your specific needs (short term, long term,
                      etc.).
                    </li>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="accordion-item mt-3">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree">
                  What are the special features of GoCarTunisia?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <p>
                    <li>Secure payment: Your transactions are protected.</li>
                    <li>All vehicle classes: Choose the one that suits you.</li>
                    <li>
                      Car sharing options: Share your car with other users.
                    </li>
                    <li>
                      Help and support center: Our team is here to assist you.
                    </li>
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
}
