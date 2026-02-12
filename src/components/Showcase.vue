<script setup>
defineProps({
  obj: typeof {},
});
</script>

<template>
  <main>
    <div class="logos">
      <ul>
        <img src="/icons/jupyter.png" alt="" />
        <li>jupytor notebook</li>
      </ul>
      <ul>
        <img src="/icons/tensorflow.png" alt="" />
        <li>Tensorflow</li>
      </ul>
      <ul>
        <img src="/icons/pytorch.png" alt="" />
        <li>pytorch</li>
      </ul>
      <ul>
        <img src="/icons/python.png" alt="" />
        <li>python</li>
      </ul>
      <ul>
        <img src="/icons/coding.png" alt="" />
        <li>machine learning</li>
      </ul>
    </div>
  </main>
</template>
<style scoped>
.logos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  gap: 10px;
  margin: 20px 0;
}
.logos ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  & img {
    width: 50%;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }
  & li {
    position: absolute;
    font-weight: 600;
    font-size: 0.7rem;
    inset: 0;
    left: 50%;
    top: -50%;
    transform: translateX(-50%);
    width: max-content;
    height: max-content;
    color: var(--primary-color);
    background-color: var(--text-color);
    padding: 5px;
    border-radius: 5px;
  }
  &:hover {
    filter: brightness(0.7);
  }
  &:hover li {
    display: block;
  }
}
.logos ul li {
  display: none;
}
.line {
  font-weight: 500;
  font-size: 1.2rem;
  margin: 20px 0;
}
</style>
