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
              <br />Venues: <br />
              NCAR, Boulder, CO <br />
              LDEO, Palisades, NY
            </h2>
            <h3>Application closed!</h3>
            <md-button
              href="https://forms.gle/CzHh9iedY1wxv9ye8"
              class="md-success md-lg md-round"
              target="_blank"
              ><md-icon>how_to_reg</md-icon>Apply Here</md-button
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
              style="text-align: left;"
            >
              <h2 class="title text-center">Overview</h2>
              <h4 class="description">
                Centers around the world are currently running their
                state-of-the-art Earth system models to participate in the 6th
                phase of the Coupled Model Intercomparison Project (CMIP6),
                which supports the United Nations Environmental Program’s
                International Panel on Climate Change 6th Assessment.
              </h4>
              <h4 class="description">
                This event will explore new paradigms for community-driven
                analysis and will consist of three primary components:
                <ol>
                  <li>Tutorials on cutting-edge analysis tools.</li>
                  <li>Peer-learning opportunities.</li>
                  <li>
                    Open-ended project work in a highly collaborative
                    environment.
                  </li>
                </ol>
              </h4>
              <h2 class="title text-center">Locations</h2>
              <h4 class="description">
                The Hackathon will be held concurrently at two locations:
                <ul>
                  <li>
                    <a href="https://goo.gl/maps/UMQ7fzxSGiKtrKEJ9"
                      >The NCAR Mesa Lab</a
                    >, in Boulder CO.
                  </li>
                  <li>
                    <a href="https://goo.gl/maps/thqWXUsptr4zPCtZ6"
                      >The Lamont Doherty Earth Observatory</a
                    >, in Palisades NY.
                  </li>
                </ul>
              </h4>

              <h2 class="title text-center">Travel support</h2>
              <h4 class="description">
                Limited funding is available to support travel and lodging, with
                preference given to early career scientists. Participants will
                be selected on the basis of interests, experience, and potential
                to contribute to collaborative initiatives. People from
                observational or application-related backgrounds are encouraged
                to apply.
              </h4>

              <h2 class="title text-center">Sponsors</h2>
              <h4 class="description">
                NCAR CMIP6 Hackathon is made possible by the following sponsors:
                <br /><br />
                <img
                  :src="sponsorsImg"
                  alt="Sponsors"
                  height="500"
                  width="700"
                  class="img-raised rounded img-fluid"
                />
              </h4>
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
