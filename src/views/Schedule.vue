<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto"
            >
              <h2 class="title">
                CMIP6 Hackathon Agenda
              </h2>
              16-18 October 2019

              <h4 class="title">Locations</h4>
              <h5 class="title">Lamont</h5>
              <p>
              We will meet in the Comer Geochemistry Building.
              On Wednesday, we will meet in the Comer First Floor Seminar room,
              for Thursday and Friday, we will use the Kennedy Room on the 3rd floor of Comer.
              The Comer 1st floor Cafe area will also be available for working.
              A map of the LDEO campus can be found here <a href="https://www.ldeo.columbia.edu/about-ldeo/maps-contacts">here</a>.
              </p>

              <h5 class="title">NCAR Mesa Lab</h5>
              <p>
              Plenary presentation and daily cross-site check-ins will be in the
              Main Seminar Room. Project teams can work in the Damon Room,
              the Chapman Room, or the VizLab. It's also possible to use the
              library or cafeteria.
              </p>

              <h5 class="title">University of Washington</h5>
              <p>
              Plenary presentation and daily cross-site check ins will be in JHN 021
              (Wednesday), ATG 610 (Thursday), and MSB 123 (Friday). These rooms are also open
              all day for hacking, though project teams are welcome to find other locations to
              work. Science talks will be held in ATG 310.
              </p>

              <h3 class="title">Daily agenda</h3>
              <img
                :src="wedImg"
                alt="wednesday"
                width="800"
                />

              <h4 class="title"></h4>
              <img
                :src="thuImg"
                alt="thursday"
                width="800"
                />

              <h4 class="title"></h4>
              <img
                :src="friImg"
                alt="friday"
                width="800"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/banner.png")
    },
  wedImg: {
    type: String,
    default: require("@/assets/img/schedule-wed.png")
    },
  thuImg: {
    type: String,
    default: require("@/assets/img/schedule-thu.png")
    },
  friImg: {
    type: String,
    default: require("@/assets/img/schedule-fri.png")
    }
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

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.section {
  padding: 0;
}
</style>
