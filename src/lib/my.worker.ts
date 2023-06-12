onmessage = ({ data: { data, msg } }: MessageEvent<PostMessage<PostMessageDataRequest>>) => {
  console.log({ msg, data });

  const message: PostMessage<PostMessageDataRequest> = {
    msg: 'response1',
    data: { text: 'Cool it works out v2 🥳' }
  };
  postMessage(message);
};

export {};
