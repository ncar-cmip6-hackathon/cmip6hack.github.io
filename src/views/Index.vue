<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h2 class="title">
              Dates: Oct. 16 - 18, 2019
              <br />Venue: Boulder, CO, USA
            </h2>
            <h3>Applications are now open!</h3>
            <md-button href class="md-success md-lg" target="_blank"
              >Register Here</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Motivation</h2>
              <h5 class="description">
                Lorem ipsum dolor sit amet consectetur, adipiscing elit
                fermentum mus lacinia mattis, semper nunc tellus senectus.
                Accumsan habitasse ligula per id nisl tempus molestie, montes
                primis nunc ridiculus sem tellus cursus curabitur, vel sodales
                donec laoreet luctus quam. Mauris nostra faucibus condimentum
                venenatis fermentum at eros lacinia netus sem aptent facilisi
                integer elementum, ornare congue vivamus vehicula montes cras
                massa curae platea pretium malesuada nisi ut.
              </h5>

              <h2 class="title text-center">Overview</h2>
              <h5 class="description">
                Lorem ipsum dolor sit amet consectetur, adipiscing elit
                fermentum mus lacinia mattis, semper nunc tellus senectus.
                Accumsan habitasse ligula per id nisl tempus molestie, montes
                primis nunc ridiculus sem tellus cursus curabitur, vel sodales
                donec laoreet luctus quam. Mauris nostra faucibus condimentum
                venenatis fermentum at eros lacinia netus sem aptent facilisi
                integer elementum, ornare congue vivamus vehicula montes cras
                massa curae platea pretium malesuada nisi ut.
              </h5>

              <h2 class="title text-center">Sponsors</h2>
              <h5 class="description">
                NCAR CMIP6 Hackathon is made possible by the following sponsors:
              </h5>
              <h2 class="title text-center">Location</h2>
              <!--<div id="osm-map"></div>-->
              <div id="map" width="600" height="600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12229.39375390682!2d-105.275031!3d39.978318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6170c343f33c8ada!2sNCAR+Mesa+Laboratory!5e0!3m2!1sen!2sus!4v1556440500223!5m2!1sen!2sus"
                  width="500"
                  height="450"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                ></iframe>
              </div>
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
  props: {
    header: {
      type: String,
      default: require("@/assets/img/flow-dynamics.png")
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
