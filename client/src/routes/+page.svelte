<script lang="ts">
  import * as calculator from '$lib/calculator-api'

  let input = ''
  let product: number | null = null

  $: operands = input.split(' ').map(Number)
</script>

<div>
  <label for="input">Input</label>
  <textarea data-test-id="input" id="input" bind:value={input} />
</div>

<div>
  <label for="sum">Sum</label>
  <button data-test-id="calculate" id="sum" on:click={async () => product = await calculator.sum(operands)}>Calculate</button>
</div>

<div>
  <label for="product">Product</label>
  <textarea data-test-id="product" id="product" bind:value={product} readonly />
</div>