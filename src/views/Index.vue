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
              <br />Venues: NCAR, Boulder, CO & <br>
                            LDEO, Palisades, NY
            </h2>
            <h3>Applications are now open!</h3>
            <md-button href="https://forms.gle/CzHh9iedY1wxv9ye8" class="md-success md-lg md-round" target=_blank
              ><md-icon>how_to_reg</md-icon>Register Here</md-button
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
              <h2 class="title text-center">Overview</h2>
              <h5 class="description">
                Centers around the world are currently running their state-of-the-art Earth system models (ESMs) to participate in the 6th phase of the Coupled Model Intercomparison Project (CMIP6), which supports the United Nations Environmental Program’s International Panel on Climate Change 6th Assessment (AR6). This event will explore new paradigms for community-driven analysis and will consist of the primary components: (1) tutorials on cutting-edge analysis tools, (2) peer-learning opportunities, and (3) open-ended project work in a highly collaborative environment.

                <br>
                The Hackathon will be held concurrently at two locations: the
                <a href="https://goo.gl/maps/UMQ7fzxSGiKtrKEJ9">NCAR Mesa Lab</a>, in Boulder CO, and the
                <a href="https://goo.gl/maps/thqWXUsptr4zPCtZ6">Lamont Doherty Earth Observatory</a>, in Palisades NY.
                <br>

                Limited funding is available to support travel and lodging, with preference given to early career scientists.

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
  props: {
    header: {
      type: String,
      default: require("@/assets/img/flow-dynamics.png")
    },

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
