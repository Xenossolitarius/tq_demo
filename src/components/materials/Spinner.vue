<template>
    <div class="spinner" :class="dark ? 'dark' : ''"></div>
</template>

<script>
export default {
    name: 'Spinner',
    props: {
        dark: {
            required: false,
            default: false
        }
    }
}
</script>

<style lang="scss">
.spinner.dark,
.spinner.dark:before,
.spinner.dark:after{
    background: $text-color;
}
.spinner,
.spinner:before,
.spinner:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  opacity: 0.9;
}
.spinner {
  color: #ffffff;
  text-indent: -9999em;
  margin: 0px auto;
  position: relative;
  font-size: 4px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.spinner:before,
.spinner:after {
  position: absolute;
  top: 0;
  content: '';
}
.spinner:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.spinner:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>