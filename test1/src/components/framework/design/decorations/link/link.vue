<template id="link">
  <a class="link {{ klass }}" href="{{ url }}" title="{{ title }}">{{ content }}</a>
</template>


<script type="text/javascript">
  export default {
    name: 'link',
    data () {
      return {
        klass: 'klass',
        url: 'url',
        title: 'title',
        content: 'content'
      }
    }
  }
</script>
