<template>
  <div class="samples">
    <div class="head">
      <div class="breadCrumb">
        <div>
          Home >
          <span class="highlight">Samples</span>
          <div class="title">Samples</div>
        </div>
      </div>
      <div class="filtering">
        <span class="filter">Filter</span>
        <span class="search">
          <input type="text"/>
        </span>
      </div>
    </div>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{error}}</div>
      <div v-if="books" class="books-list">
        <BookItem v-for="book in books" v-bind:key="book.isbn"
          :title="book.title" :path="book.cover" class="book" />
      </div>
    </div>
  </div>
</template>

<script lang="js">

import BookItem from '@/components/BookItem.vue';

export default {
  name: 'samples',

  components: {
    BookItem,
  },
  data() {
    const dataSet = {
      loading: false,
      error: null,
      books: null,
    };
    return dataSet;
  },

  created() {
    this.fetchData();
  },

  // watch: {
  //   $route: 'samples',
  // },

  methods: {
    fetchData() {
      this.error = null;
      this.loading = true;
      this.books = null;
      fetch('https://ops.matildaeducation.com.au/ops/api/1.0/demobooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apiKey: '90e44f67-7322-488d-99ad-22c0c87c61c1',
        },
      })
        .then(response => response.json())
        .then((data) => {
          this.books = data.books;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.error = 'Something went wrong.';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.samples {
  .head{
    height: 40px;
    padding: 10px 20px;
    .breadCrumb {
      float: left;
      .highlight {
        color: #005D00;
      }
      .title{
        font-size: 18px;
      }
    }
    .filtering{
      float: right;
      margin: 0px;
    }
  }
  .books-list {
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center;
    .book {
      width:220px;
      height: 330px;
      padding: 20px;
    }
  }
}
</style>
