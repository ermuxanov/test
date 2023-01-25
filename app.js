const app = {
  data() {
    return {
      posts: "https://jsonplaceholder.typicode.com/comments",
      users: [],
      page: {
        current: 1,
        length: 10,
      },
    };
  },
  mounted() {
    fetch(this.posts)
      .then((response) => response.json())
      .then((data) => (this.users = data));
  },
  methods: {
    prevPage() {
      if (this.page.current > 1) {
        this.page.current -= 1;
      }
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length) {
        this.page.current += 1;
      }
    },
  },
  computed: {
    userSort() {
      return this.users.filter((row, index) => {
        let start = (this.page.current - 1) * this.page.length;
        let end = this.page.current * this.page.length;
        if (index >= start && index < end) return true;
      });
    },
  },
};

Vue.createApp(app).mount("#app");
