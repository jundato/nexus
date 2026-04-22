<template>
  <div class="summary-bar" :class="{ 'size-small': size === 'small' }">
    <span class="stat-badge" title="Running">
      <span class="stat-dot stat-dot-running" :class="{ 'is-active': counts.running > 0 }"></span>
      {{ counts.running }}
    </span>
    <span class="stat-badge" title="Stopped">
      <span class="stat-dot stat-dot-stopped" :class="{ 'is-active': (counts.stopped + (counts.stopping || 0)) > 0 }"></span>
      {{ counts.stopped + (counts.stopping || 0) }}
    </span>
    <span v-if="counts.errored" class="stat-badge" title="Errored">
      <span class="stat-dot stat-dot-errored" :class="{ 'is-active': counts.errored > 0 }"></span>
      {{ counts.errored }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  counts: {
    type: Object,
    required: true,
    default: () => ({ running: 0, stopped: 0, errored: 0, stopping: 0 })
  },
  total: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    default: 'normal' // 'normal' or 'small'
  }
})
</script>

<style scoped>
.size-small {
  gap: 8px;
}
.size-small .stat-badge {
  font-size: 10px;
}
.size-small .stat-dot {
  width: 6px;
  height: 6px;
}
</style>
