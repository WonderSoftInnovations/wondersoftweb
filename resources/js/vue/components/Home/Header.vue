<template>
  <div class="header-bottom-wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header position-relative">
            <div class="header__logo top-logo">
              <a href="/">
                <h4>WonderSoft</h4>
              </a>
            </div>

            <div class="header-right flexible-image-slider-wrap">
              <div class="header-right-inner" id="hidden-icon-wrapper">
                <div class="header-search-form d-md-none d-block">
                  <form action="#" class="search-form-top">
                    <input
                      class="search-field"
                      type="text"
                      placeholder="Search…"
                    />
                    <button class="search-submit">
                      <i class="search-btn-icon fa fa-search"></i>
                    </button>
                  </form>
                </div>

                <div
                  class="swiper-container header-top-info-slider-werap top-info-slider__container"
                >
                  <div
                    class="swiper-wrapper header-top-info-inner default-color"
                  >
                    <div class="swiper-slide">
                      <div class="info-item">
                        <div class="info-icon">
                          <span class="fa fa-phone"></span>
                        </div>
                        <div class="info-content">
                          <h6 class="info-title">0704 317146</h6>
                          <div class="info-sub-title">Info@wondersoft.com</div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="info-item">
                        <div class="info-icon">
                          <span class="fa fa-map-marker-alt"></span>
                        </div>
                        <div class="info-content">
                          <h6 class="info-title">80/3 Ambalangoda Polgasowita</h6>
                          <div class="info-sub-title">Sri Lanka 10320</div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="info-item">
                        <div class="info-icon">
                          <span class="fa fa-clock"></span>
                        </div>
                        <div class="info-content">
                          <h6 class="info-title">8:00AM - 6:00PM</h6>
                          <div class="info-sub-title">Monday to Saturday</div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="info-item">
                        <div class="info-icon">
                          <span class="fa fa-comment-alt-lines"></span>
                        </div>
                        <div class="info-content">
                          <h6 class="info-title">Online 24/7</h6>
                          <div class="info-sub-title">070 431 71 46</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="header-social-networks style-icons">
                  <div class="inner">
                    <!-- <a
                      class="social-link hint--black hint--bottom-left"
                      aria-label="Twitter"
                      href="https://twitter.com/"
                      data-hover="Twitter"
                      target="_blank"
                    >
                      <i class="social-icon fab fa-twitter"></i>
                    </a> -->
                    <a
                      class="social-link hint--black hint--bottom-left"
                      aria-label="Facebook"
                      href="https://facebook.com/wondersoftinnovations"
                      data-hover="Facebook"
                      target="_blank"
                    >
                      <i class="social-icon fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="social-link hint--black hint--bottom-left"
                      aria-label="Instagram"
                      href="https://instagram.com/"
                      data-hover="Instagram"
                      target="_blank"
                    >
                      <i class="social-icon fab fa-instagram"></i>
                    </a>
                    <!-- <a
                      class="social-link hint--black hint--bottom-left"
                      aria-label="Linkedin"
                      href="https://linkedin.com/"
                      data-hover="Linkedin"
                      target="_blank"
                    >
                      <i class="social-icon fab fa-linkedin"></i>
                    </a> -->
                  </div>
                </div>
              </div>
              <div
                class="mobile-navigation-icon d-block d-xl-none"
                id="mobile-menu-trigger"
              >
                <i></i>
              </div>
              <div
                class="hidden-icons-menu d-block d-md-none"
                id="hidden-icon-trigger"
              >
                <a href="javascript:void(0)">
                  <i class="far fa-ellipsis-h-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-bottom-inner">
              <div class="header-bottom-left-wrap">
                <div class="header__navigation d-none d-xl-block">
                  <nav class="navigation-menu navigation-menu--text_white">
                    <ul>

                      <li class="">
                        <a href="/"><span>Home</span></a>
                      </li>


                      <li class="">
                        <a href="/team"><span>Team</span></a>
                      </li>

                      <li class="">
                        <a href="/contact"><span>Contact Us</span></a>

                      </li>

                      <li class="">
                        <a href="/about"><span>About</span></a>
                      </li>


                    </ul>
                  </nav>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>