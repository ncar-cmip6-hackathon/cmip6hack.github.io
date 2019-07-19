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
              <h2 class="title text-center">
                Instructors and Event Coordinators
              </h2>
              <div class="team">
                <div class="md-layout">
                  <!-- Team Player 1--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg1"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Matthew Long
                          <br />
                          <small class="card-description text-muted">
                            Scientist/Oceanographer @ NCAR-CGD
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/matt_c_long"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/matt-long"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="http://www.cgd.ucar.edu/staff/mclong/index.html"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 1--->

                  <!-- Team Player 2--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg2"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Ryan Abernathey
                          <br />
                          <small class="card-description text-muted">
                            Associate Professor @ Columbia University-LDEO
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/rabernat"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/rabernat"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="http://rabernat.github.io/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 2--->

                  <!-- Team Player 3--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg3"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          John Dunne
                          <br />
                          <small class="card-description text-muted">
                            Research Oceanographer @ NOAA-GFDL
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://www.gfdl.noaa.gov/john-p-dunne-home-page/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 3--->

                  <!-- Team Player 4--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg4"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Angeline Pendergrass
                          <br />
                          <small class="card-description text-muted">
                            Project Scientist @ NCAR-CGD
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/apuffycloud"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/apendergrass"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="http://www.cgd.ucar.edu/staff/apgrass/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 4--->

                  <!-- Team Player 5--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg5"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Galen McKinley
                          <br />
                          <small class="card-description text-muted">
                            Professor @ Columbia University-LDEO
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/oceancarbon"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/galenmckinley"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://galenmckinley.github.io/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 5--->

                  <!-- Team Player 6--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg6"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Joseph Hamman
                          <br />
                          <small class="card-description text-muted">
                            Project Scientist @ NCAR-CGD
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/HammanHydro"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/jhamman"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="http://joehamman.com"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 6--->

                  <!-- Team Player 7--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg7"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Kevin Paul
                          <br />
                          <small class="card-description text-muted">
                            Project Scientist @ NCAR-CISL
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/NCARKMPaul"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/kmpaul"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://staff.ucar.edu/users/kpaul"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 7--->

                  <!-- Team Player 8--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg8"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Julia Kent
                          <br />
                          <small class="card-description text-muted">
                            Software Engineer @ NCAR-CISL
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/jukent"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://staff.ucar.edu/users/jkent"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 8--->

                  <!-- Team Player 9--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg9"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          John Krasting
                          <br />
                          <small class="card-description text-muted">
                            Physical Scientist @ NOAA-GFDL
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/krasting"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/jkrasting"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://www.gfdl.noaa.gov/john-krasting-homepage/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 9--->

                  <!-- Team Player 10--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg10"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Anderson Banihirwe
                          <br />
                          <small class="card-description text-muted">
                            Software Engineer @ NCAR-CISL
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/andersy005"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="https://github.com/andersy005"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://andersonbanihirwe.dev"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 10--->

                  <!-- Team Player 11--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg11"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Isla Simpson
                          <br />
                          <small class="card-description text-muted">
                            Scientist @ NCAR-CGD
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/IslaSimpson4"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="http://www.cgd.ucar.edu/staff/islas/index.html"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 11--->

                  <!-- Team Player 12--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg12"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Anastasia Romanou
                          <br />
                          <small class="card-description text-muted">
                            Research Scientist @ Columbia University & NASA GISS
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://www.giss.nasa.gov/staff/aromanou/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 12--->

                  <!-- Team Player 13--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg13"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Flavio Lehner
                          <br />
                          <small class="card-description text-muted">
                            Project Scientist @ NCAR-CGD
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://www.giss.nasa.gov/staff/aromanou/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 13--->

                  <!-- Team Player 14--->
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg14"
                            alt="Avatar"
                            class="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <h4 class="card-title">
                          Scott Doney
                          <br />
                          <small class="card-description text-muted">
                            Professor @ University of Virginia
                          </small>
                        </h4>
                        <md-card-actions class="text-center">
                          <md-button
                            href="https://twitter.com/scottdoney1"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            href="javascript:void(0)"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-github"></i>
                          </md-button>
                          <md-button
                            href="https://doney.evsc.virginia.edu/"
                            class="md-just-icon md-simple"
                          >
                            <i class="fas fa-globe"></i>
                          </md-button>
                        </md-card-actions>
                      </md-card>
                    </div>
                  </div>

                  <!-- End Team Player 14--->
                </div>
              </div>

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
      default: require("@/assets/img/Labs-Earth-space-banner.jpg")
    },

    teamImg1: {
      type: String,
      default: "https://avatars3.githubusercontent.com/u/9341267?s=400&v=4"
    },

    teamImg2: {
      type: String,
      default: "https://avatars2.githubusercontent.com/u/1197350?s=400&v=4"
    },

    teamImg3: {
      type: String,
      default:
        "https://www.gfdl.noaa.gov/wp-content/uploads/pix/user_images/jpd/photo_me2.jpg"
    },

    teamImg4: {
      type: String,
      default: "https://avatars0.githubusercontent.com/u/16008440?s=400&v=4"
    },

    teamImg5: {
      type: String,
      default:
        "https://galenmckinley.github.io/assets/img/headshot_GAMsmall.jpg"
    },

    teamImg6: {
      type: String,
      default:
        "https://staff.ucar.edu/sites/default/files/styles/medium/public/user/photos/joe_headshot.png?itok=u6-AnwC8"
    },

    teamImg7: {
      type: String,
      default:
        "https://staff.ucar.edu/sites/default/files/styles/medium/public/user/photos/MJP_0874-clean.jpg?itok=K9h6sxwn"
    },

    teamImg8: {
      type: String,
      default: "https://avatars1.githubusercontent.com/u/46687291?s=400&v=4"
    },
    teamImg9: {
      type: String,
      default: "https://avatars3.githubusercontent.com/u/6594675?s=400&v=4"
    },
    teamImg10: {
      type: String,
      default:
        "https://avatars1.githubusercontent.com/u/13301940?s=400&u=70e16e6fe4d0b3b811b27c6d1353ac7648fbaac0&v=4"
    },
    teamImg11: {
      type: String,
      default: "http://www.cgd.ucar.edu/staff/islas/images/islas.JPG"
    },
    teamImg12: {
      type: String,
      default: "https://www.giss.nasa.gov/staff/aromanou/aromanou.png"
    },
    teamImg13: {
      type: String,
      default:
        "https://github.com/NCAR/hydrology/blob/master/demos/demo1/assets/img/members/flaviolehner.jpg?raw=true"
    },
    teamImg14: {
      type: String,
      default:
        "https://doney.evsc.virginia.edu/wp-content/uploads/2017/08/SD-273x300.jpg"
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
