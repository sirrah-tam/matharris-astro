<template lang="html">
  <div>
    <div class="row profile">
      <div class="col-md-6">
        <div v-if="data.points" class="points">
          <p id="totalpts" class="totalpts">{{data.points.total}}</p>
          <p class="total">Total Points</p>
          <ul>
              <li><span class="fa fa-circle html"></span>HTML: {{data.points.HTML}}</li>
              <li><span class="fa fa-circle css"></span>CSS: {{data.points.CSS}}</li>
              <li><span class="fa fa-circle js"></span>JavaScript: {{data.points.JavaScript}}</li>
              <li><span class="fa fa-circle wp"></span>Wordpress: {{data.points.WordPress}}</li>
              <li><span class="fa fa-circle devtools"></span>Development Tools: {{data.points['Development Tools']}}</li>
              <li><span class="fa fa-circle php"></span>PHP: {{data.points.PHP}}</li>
          </ul>
          <p><a href="https://teamtreehouse.com/matharris" target="_blank">See more at Team Treehouse >></a></p>
        </div>
      </div>
      <div class="col-md-6">
        <div id="badges" class="badges">
          <h3>Recent Badges</h3>
          <div v-for="badge in recent" class='tthbadge'>
              <img :src="badge.icon_url" alt="">
              {{badge.name}}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      data: [],
      recent: []
    };
  },

  watch: {
    data: function(data) {
      if (this.account === "teamtreehouse") {
        this.recentBadges(data.badges);
      } else {
        console.log("test");
      }
    }
  },

  props: {
    account: String,
    api: Object
  },

  methods: {
    async callRequest(api) {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        // console.log(json);
        this.data = json;
        console.log(this.data);
        
      } catch (error) {
          console.log(error.message);
        }
      // $.ajax(api)
      //   .done(response => {
      //     this.data = response;
      //   })
      //   .fail(function(error) {
      //     console.log(error);
      //   });
    },
    recentBadges(badges) {
      let badgeNum = badges.length - 1;
      let lastfourbadges = badges.length - 4;
      for (let i = badgeNum; i >= lastfourbadges; i--) {
        this.recent.push(badges[i]);
      }
    }
  },

  created() {
    this.callRequest(this.api.url);
  }
};
</script>
