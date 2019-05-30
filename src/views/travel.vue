<template>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Travel Information</h2>
              <h5 class="description">
                Coming soon.
              </h5>

              <h2 class="title text-center">Sponsors</h2>
              <h5 class="description">
                NCAR CMIP6 Hackathon is made possible by the following sponsors:
                <br /><br />
                <img
                  :src="sponsorsImg"
                  alt="Sponsors"
                  height="500"
                  width="700"
                  class="img-raised rounded img-fluid"
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
    sponsorsImg: {
      type: String,
      default: require("@/assets/img/sponsors.png")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
