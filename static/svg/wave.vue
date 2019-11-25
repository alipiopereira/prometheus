<template>
  <div>
    <svg
      id="wave"
      width="1300"
      :height="height"
      viewBox="0 0 600 280"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
      <g>
        <path
          id="svg_4"
          d="M0.500001 244.038L0 72.0381C0 72.0381 36.375 15.5381 86 14.5381C135.625 13.5382 164.149 66.5382 202 66.5382C300.25 66.5382 310.011 -1.84417 397 0.0381596C483.989 1.9205 524.5 84.0381 600.5 84.0381C676.5 84.0381 664 28.5382 728.5 32.5382C793 36.5382 778.563 108.832 858.5 100.038C938.437 91.2441 960.991 9.28815 1047 2.03812C1133.01 -5.2119 1200.5 71.0381 1200.5 71.0381L1200.5 244.038L0.500001 244.038Z"
          transform="translate(-0.4998779 9)" fill="#0AE6B2" stroke="#2EFBC9" stroke-opacity="0.4117647" stroke-width="18"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "wave",
  props: {
    height: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
#wave {
  position: absolute;
  width: 125%;
  bottom: -100px;
  left: -25px;
}
</style>