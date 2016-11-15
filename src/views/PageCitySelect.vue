<template>
  <div class="blog-post">
    <h2 class="blog-post-title">省市区选择</h2>
    <p class="blog-post-meta">2016-11-15</p>

    <p>省市区选择组件例子：</p>
    <hr>
    <CitySelect></CitySelect>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
  import CitySelect from '../components/CitySelect';

  export default {
    components: {
      CitySelect
    },
    data () {
      return {
        msg: 'Hello Navbar!'
      }
    },
    methods: {
//      clickHaha: function(){
//        console.log('hahaFn');
//        layer.msg('clickHaha');
//      },
    },

    created () {
//      console.log('creat')
//      $('#J_Hehe').click(function(){
//        console.log('e');
//      })
    }
  }
</script>

<style>

</style>
