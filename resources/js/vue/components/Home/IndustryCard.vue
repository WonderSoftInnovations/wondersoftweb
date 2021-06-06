<template>

  <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
      <!-- https://demo.hasthemes.com/mitech-preview/assets/images/icons/soft-s3-01.png -->
    <div class="ht-box-images style-10">
      <div class="image-box-wrap">
        <div class="box-image">
          <img
            class="img-fulid"
            :src="this.url"
            alt=""
          />
        </div>
        <div class="content">
          <h5 class="heading">{{this.title}}</h5>
          <div class="box-images-arrow">
            <a href="#">
              <span class="button-text">Discover now</span>
              <i class="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

    props : ['title' , 'url']

};
</script>