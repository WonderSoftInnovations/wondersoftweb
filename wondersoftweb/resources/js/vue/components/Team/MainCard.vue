<template>
  <div class="col-lg-3 col-md-6 wow move-up">
    <div class="grid-item">
      <div class="ht-team-member">
        <div class="team-image">
          <img
            class="img-fluid"
            :src="this.img"
            alt=""
          />
          <div class="social-networks">
            <div class="inner">

              <a
                target="_blank"
                href="#"
                class="hint--bounce hint--top hint--theme-two"
                aria-label="Facebook"
                ><i class="fab fa-facebook"></i>
              </a>

              <a
                target="_blank"
                href="#"
                class="hint--bounce hint--top hint--theme-two"
                aria-label="Twitter"
                ><i class="fab fa-twitter"></i>
              </a>

              <a
                target="_blank"
                href="#"
                class="hint--bounce hint--top hint--theme-two"
                aria-label="Instagram"
                ><i class="fab fa-instagram"></i>
              </a>

            </div>
          </div>
        </div>
        <div class="team-info text-center">
          <h5 class="name">{{this.name}}</h5>
          <div class="position">{{this.position}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props : ['name' , 'position' , 'img']
}
</script>