<template>
  <div id="app">
    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <a class="blog-nav-item active" href="/city-select">Home</a>
        </nav>
      </div>
    </div>

    <div class="container">

      <div class="blog-header">
        <h1 class="blog-title">vuejs2.0组件</h1>
        <p class="lead blog-description">界面样式bootstrap，非必须</p>
      </div>

      <div class="row">

        <div class="col-sm-8 blog-main">
          <router-view></router-view>
        </div><!-- /.blog-main -->

        <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
          <div class="sidebar-module">
            <h4>目录</h4>
            <ol class="list-unstyled">
              <li><a href="#">省市区选择</a></li>
            </ol>
          </div>
        </div><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </div><!-- /.container -->

    <div class="blog-footer">
      <p>Go to my <a href="https://github.com/iNuanfeng/vue-component" target="_blank">Github</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>
