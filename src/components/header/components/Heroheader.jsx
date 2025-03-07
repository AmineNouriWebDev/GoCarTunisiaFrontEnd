import heroPatternRight from "../../../images/hero-pattern-right.png";
import heroPatternLeft from "../../../images/hero-pattern-left.png";
export default function Heroheader() {
  return (
    <div>
      <section id="hero" class="position-relative overflow-hidden">
        <div class="pattern-overlay pattern-right position-absolute">
          <img src={heroPatternRight} alt="pattern" />
        </div>
        <div class="pattern-overlay pattern-left position-absolute">
          <img src={heroPatternLeft} alt="pattern" />
        </div>
        <div class="hero-content container text-center">
          <div class="row">
            <div class="detail mb-4">
              <h1 class="">
                Find your <span class="text-primary"> rental car </span>
              </h1>
              <p class="hero-paragraph">
                We have many best rental car collections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
