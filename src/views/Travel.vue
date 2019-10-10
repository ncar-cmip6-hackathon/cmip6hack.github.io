<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Travel</h2>
              <h4 class="description">
              For participants traveling from the airport to the hotel in Boulder, we
              recommend <a href="https://greenrideboulder.com/">Green
              Ride Boulder</a> or you can use Uber or Lyft. In Palisades, we are
              forming car pools from the airport to the hotel, details will be confirmed later
              this week. During the Hackathon at NCAR, there will be a shuttle service between
              the hotel and venue each day, and at LDEO we will use car pools.
              </h4>
              </h2>

              <h2 class="title text-center">Meals</h2>
              <h4 class="description">
              Breakfast will be provided each morning at all of the hackathon sites:
              full breakfast at NCAR, continental breakfast at LDEO (hotel offers
              free breakfast), and bagels and coffee at UW. During lunch,
              participants will use the on-site cafeterias at LDEO and NCAR, and you
              will be on your own for dinners (<a
              href="https://www.tripadvisor.com/RestaurantsNear-g48359-d250870-HNA_Palisades_Premier_Conference_Center-Palisades_New_York.html">Palisades restaurant list</a>,
              <a
              href="https://www.tripadvisor.com/RestaurantsNear-g33324-d284557-National_Center_for_Atmospheric_Research_NCAR-Boulder_Colorado.html">Boulder restaurant list</a>). The first evening of the hackathon (Wed., October
              16), there will be a welcome reception with refreshments at LDEO and
              NCAR.
              <br><br>
              Please consult the <a href="#/schedule">agenda</a> for all meal/shuttle times.
              </h4>
              </h2>

              <div class="md-layout"></div>

              <br />
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
