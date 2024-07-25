export default function Search() {
  return (
    <div>
      {/* search section start  */}
      <section id="search">
        <div class="container search-block p-5">
          <form class="row">
            <div class="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
              <label
                for="vehicle"
                class="label-style text-capitalize form-label">
                Vehicle type
              </label>
              <div class="input-group date">
                {/* <input type="text" class="form-control p-3 " id="vehicle" placeholder="Select Car Group" /> */}
                <select
                  class="form-select form-control p-3"
                  id="vehicle"
                  aria-label="Default select example"
                  style={{ backgroundImage: "none" }}>
                  <option selected>Select Vehicle Type</option>
                  <option value="1">Seat Leon TSI 2020</option>
                  <option value="2">Skoda Fabia 2024</option>
                  <option value="3">Suzuki Swift 2024</option>
                  <option value="4">Suzuki Celerio 2022</option>
                  <option value="5">Skoda Fabia 2022</option>
                  <option value="6">Hyundai I20 BVA 2024</option>
                  <option value="7">Hyundai Grand I10 2024</option>
                </select>
                <span class="search-icon-position position-absolute p-3">
                  <iconify-icon
                    class="search-icons"
                    icon="solar:bus-outline"></iconify-icon>
                </span>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
              <label
                for="location"
                class="label-style text-capitalize form-label">
                Picking up location
              </label>
              <div class="input-group date">
                <input
                  type="text"
                  class="form-control p-3 position-relative"
                  id="location"
                  placeholder="Airport or anywhere"
                />
                <span class="search-icon-position position-absolute p-3">
                  <iconify-icon
                    class="search-icons"
                    icon={"solar:map-arrow-square-outline"}></iconify-icon>
                </span>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
              <label
                for="pick-up-date"
                class="label-style text-capitalize form-label">
                Picking up date
              </label>
              <div class="input-group date" id="datepicker1">
                <input type="text" class="form-control p-3" id="pick-up-date" />

                <span class="input-group-append">
                  <span class="search-icon-position position-absolute p-3">
                    <iconify-icon
                      class="search-icons"
                      icon="solar:calendar-broken"></iconify-icon>
                  </span>
                </span>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
              <label
                for="return-date"
                class="label-style text-capitalize form-label">
                Returning date
              </label>
              <div class="input-group date" id="datepicker2">
                <input type="text" class="form-control p-3" id="return-date" />

                <span class="input-group-append">
                  <span class="search-icon-position position-absolute p-3">
                    <iconify-icon
                      class="search-icons"
                      icon="solar:calendar-broken"></iconify-icon>
                  </span>
                </span>
              </div>
            </div>
          </form>

          <div class="d-grid gap-2 mt-4">
            <button class="btn btn-primary" type="button">
              Find your car
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
