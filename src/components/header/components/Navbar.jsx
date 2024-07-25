import React from "react";
import imgLogo from "../../../images/logo.png";
import imgDropdownLangfr from "../../../images/gb.png";
import imgDropdownLangtn from "../../../images/tn.png";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light container-fluid py-3 position-fixed">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src={imgLogo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav align-items-center justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active px-3" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3" href="#rental">
                    Cars
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3" href="#services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3" href="#blog">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3" href="#action">
                    Contact
                  </a>
                </li>
              </ul>
              <div
                class="btn-group"
                role="group"
                aria-label="Button group with nested dropdown">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "var(--link-color)" }}>
                    <i class="bi bi-translate"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/fr/">
                        <img src={imgDropdownLangfr} alt="fr" /> Francais
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/ar/">
                        <img src={imgDropdownLangtn} alt="ar" /> العربية
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-flex mt-5 mt-lg-0 ps-xl-5 align-items-center justify-content-center">
                <ul class="navbar-nav justify-content-end align-items-center">
                  <li class="nav-item">
                    <a
                      class="nav-link px-3"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      Account
                    </a>
                  </li>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="tabs-listing">
                            <nav>
                              <div
                                class="nav nav-tabs d-flex justify-content-center border-0"
                                id="nav-tab"
                                role="tablist">
                                <button
                                  class="btn btn-outline-primary text-uppercase me-3 active"
                                  id="nav-sign-in-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-sign-in"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-sign-in"
                                  aria-selected="true">
                                  Log In
                                </button>
                                <button
                                  class="btn btn-outline-primary text-uppercase"
                                  id="nav-register-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-register"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-register"
                                  aria-selected="false">
                                  Sign Up
                                </button>
                              </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade active show"
                                id="nav-sign-in"
                                role="tabpanel"
                                aria-labelledby="nav-sign-in-tab">
                                <form
                                  id="form1"
                                  class="form-group flex-wrap p-3">
                                  <div class="form-input col-lg-12 my-4">
                                    <label
                                      for="exampleInputEmail1"
                                      class="form-label fs-6 text-uppercase fw-bold text-black">
                                      Email Address
                                    </label>
                                    <input
                                      type="text"
                                      id="exampleInputEmail1"
                                      name="email"
                                      placeholder="Email"
                                      class="form-control ps-3"
                                    />
                                  </div>
                                  <div class="form-input col-lg-12 my-4">
                                    <label
                                      for="inputPassword1"
                                      class="form-label fs-6 text-uppercase fw-bold text-black">
                                      Password
                                    </label>
                                    <input
                                      type="password"
                                      id="inputPassword1"
                                      placeholder="Password"
                                      class="form-control ps-3"
                                      aria-describedby="passwordHelpBlock"
                                    />
                                    <div
                                      id="passwordHelpBlock"
                                      class="form-text text-center">
                                      <a href="#" class="password">
                                        Forgot Password ?
                                      </a>
                                    </div>
                                  </div>
                                  <label class="py-3">
                                    <input
                                      type="checkbox"
                                      required=""
                                      class="d-inline"
                                    />
                                    <span class="label-body text-black">
                                      Remember Me
                                    </span>
                                  </label>
                                  <div class="d-grid my-3">
                                    <button class="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">
                                      Log In
                                    </button>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-register"
                                role="tabpanel"
                                aria-labelledby="nav-register-tab">
                                <form
                                  id="form2"
                                  class="form-group flex-wrap p-3">
                                  <div class="form-input col-lg-12 my-4">
                                    <label
                                      for="exampleInputEmail2"
                                      class="form-label fs-6 text-uppercase fw-bold text-black">
                                      Email Address
                                    </label>
                                    <input
                                      type="text"
                                      id="exampleInputEmail2"
                                      name="email"
                                      placeholder="Email"
                                      class="form-control ps-3"
                                    />
                                  </div>
                                  <div class="form-input col-lg-12 my-4">
                                    <label
                                      for="inputPassword2"
                                      class="form-label fs-6 text-uppercase fw-bold text-black">
                                      Password
                                    </label>
                                    <input
                                      type="password"
                                      id="inputPassword2"
                                      placeholder="Password"
                                      class="form-control ps-3"
                                      aria-describedby="passwordHelpBlock"
                                    />
                                  </div>
                                  <label class="py-3">
                                    <input
                                      type="checkbox"
                                      required=""
                                      class="d-inline"
                                    />

                                    <span class="label-body text-black">
                                      I agree to the
                                      <a
                                        href="#"
                                        class="text-black password border-bottom">
                                        Privacy Policy
                                      </a>
                                    </span>
                                  </label>
                                  <div class="d-grid my-3">
                                    <button class="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">
                                      Sign Up
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
