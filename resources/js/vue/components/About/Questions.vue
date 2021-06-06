<template>
  <div class="card">
    <div class="card-header" :id="this.heading_id">
      <h5 class="mb-0">
        <button
          class="btn-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          {{this.question}}<span>
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-chevron-up"></i>
          </span>
        </button>
      </h5>
    </div>
    <div
      id="collapseTwo"
      class="collapse"
      :aria-labelledby="this.heading_id"
      data-parent="#accordion"
    >
      <div class="card-body">
        <p>
            {{this.answer}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    props : ['question' , 'answer' , 'heading_id'],

};
</script>