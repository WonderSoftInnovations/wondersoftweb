<template>
  <div>
    <div class="preloader-activate preloader-active open_tm_preloader">
      <div class="preloader-area-wrap">
        <div
          class="spinner d-flex justify-content-center align-items-center h-100"
        >
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    </div>

    <div class="header-area">
      <Header />

      <div class="breadcrumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb_box text-center">
                <h2 class="breadcrumb-title">Contact us</h2>

                <ul class="breadcrumb-list">
                  <li class="breadcrumb-item">
                    <a
                      href="/"
                      >Home</a
                    >
                  </li>
                  <li class="breadcrumb-item active">Contact us</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="main-wrapper">
        <div class="site-wrapper-reveal">
          <!--====================  Conact us Section Start ====================-->
          <div
            class="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70"
          >
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 col-lg-6">
                  <div class="conact-us-wrap-one mb-30">
                    <h3 class="heading">
                      To make requests for <br />further information,
                      <br /><span class="text-color-primary">contact us</span>
                      via our social channels.
                    </h3>
                    <div class="sub-heading">
                      We just need a couple of hours! <br />
                      No more than 2 working days since receiving your Information
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-lg-6">
                  <div class="contact-form-wrap">
                    <!-- <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php" method="post"> -->
                    <form
                      id="contact-form"
                      action=""
                      method="post"
                    >
                      <div class="contact-form">
                        <div class="contact-input">
                          <div class="contact-inner">
                            <input
                              name="con_name"
                              type="text"
                              placeholder="Name *"
                            />
                          </div>
                          <div class="contact-inner">
                            <input
                              name="con_email"
                              type="email"
                              placeholder="Email *"
                            />
                          </div>
                        </div>
                        <div class="contact-inner">
                          <input
                            name="con_subject"
                            type="text"
                            placeholder="Subject *"
                          />
                        </div>
                        <div class="contact-inner contact-message">
                          <textarea
                            name="con_message"
                            placeholder="Please describe what you need."
                          ></textarea>
                        </div>
                        <div class="submit-btn mt-20">
                          <button class="ht-btn ht-btn-md" type="submit">
                            Send message
                          </button>
                          <p class="form-messege"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-us-info-wrappaer section-space--pb_100">
            <div class="container">
              <div class="row align-items-center">


                <div class="col-lg-4 col-md-6">
                  <div class="conact-info-wrap mt-30">
                    <h5 class="heading mb-20">Piliyandala</h5>
                    <ul class="conact-info__list">
                      <li>No 80/3 Welakumbura rd, Ambalangoda, Polgasowita, 10320</li>
                      <li>
                        <a href="#" class="hover-style-link text-color-primary"
                          >contact@wondersoftinno.com</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="hover-style-link text-black font-weight--bold"
                          >(+94) 70 431 7146</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>

        <Footer />



      </div>


    </div>


    <a href="#" class="scroll-top" id="scroll-top">
      <i class="arrow-top fal fa-long-arrow-up"></i>
      <i class="arrow-bottom fal fa-long-arrow-up"></i>
    </a>

    <MobileHeaderPopup />


  </div>
</template>

<script>
import Header from "../Home/Header.vue";
import Footer from "../Home/Footer.vue";
import MobileHeaderPopup from "../Navigation/MobileHeaderPopup.vue";



export default {
  components: {
    Header,
    Footer,
    MobileHeaderPopup
  },
};
</script>