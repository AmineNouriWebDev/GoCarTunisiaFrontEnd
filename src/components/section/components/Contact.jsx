import imgActionPattern from "../../../images/call-to-action-pattern.png";
export default function Contact() {
  return (
    <div>
      <section id="action" class="position-relative">
        <div class="pattern-overlay pattern-right position-absolute">
          <img src={imgActionPattern} alt="pattern" />
        </div>

        <div class="container py-5 my-5">
          <div class="row py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <h2 class="">
                Let’s begin with
                <span class="text-primary">GoCarTunisia rental.</span>
              </h2>
            </div>
            <div class="col-lg-6">
              <p>
                “Start your adventure with
                <span class="text-primary">GoCarTunisia </span>! Our service car
                rental offers you a hassle-free experience. That you are
                traveling for business or pleasure, we have the perfect vehicle
                for you. Click on the Contact us button to book now!” 😊
              </p>
              <a href="contact.html" class="btn btn-primary mt-2">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
