onmessage = ({ data: { msg } }: MessageEvent<PostMessage<PostMessageDataRequest>>) => {
  switch (msg) {
    case 'start':
      startTimer();
      break;
    case 'stop':
      stopTimer();
  }
};

let timer: NodeJS.Timeout | undefined = undefined;

const print = () => console.log(`Timer ${performance.now()}ms ⏱️`);

const startTimer = () => (timer = setInterval(print, 1000));

const stopTimer = () => {
  if (!timer) {
    return;
  }

  clearInterval(timer);
  timer = undefined;
};

export {};
