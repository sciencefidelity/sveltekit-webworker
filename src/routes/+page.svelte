<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  let syncWorker: Worker | undefined = undefined;

  const onWorkerMessage = ({
    data: { msg, data }
  }: MessageEvent<PostMessage<PostMessageDataResponse>>) => {
    console.log({ msg, data });
  };

  const loadWorker = async () => {
    const SyncWorker = await import('$lib/timer.worker?worker');
    syncWorker = new SyncWorker.default();

    syncWorker.postMessage({ msg: 'start' });
  };

  onMount(loadWorker);

  onDestroy(() => syncWorker?.postMessage({ msg: 'stop' }));
</script>

<h1>Web worker demo</h1>
