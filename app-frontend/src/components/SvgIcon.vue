<template>
    <div ref="svgContainer"></div>
  </template>
  
  <script>
  import { onMounted, watch, ref } from 'vue';
  
  export default {
    name: 'SvgIcon',
    props: {
      path: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const svgContainer = ref(null);
  
      const loadSvg = async () => {
        try {
          const response = await fetch(props.path);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const svgText = await response.text();
  
          // Create a temporary container to parse the SVG
          const tempContainer = document.createElement('div');
          tempContainer.innerHTML = svgText;
  
          // Get the SVG element
          const svgElement = tempContainer.querySelector('svg');
  
          // Replace the div with the SVG
          if (svgContainer.value && svgElement) {
            svgContainer.value.replaceWith(svgElement);
          }
        } catch (error) {
          console.error('Error loading SVG:', error);
        }
      };
  
      onMounted(() => {
        loadSvg();
      });
  
      watch(() => props.path, loadSvg);
  
      return {
        svgContainer
      };
    }
  };
  </script>
  