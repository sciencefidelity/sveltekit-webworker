interface PostMessageDataRequest {
  text: string;
}

interface PostMessageDataResponse {
  text: string;
}

type PostMessageRequest = 'request1' | 'start' | 'stop';
type PostMessageResponse = 'response1' | 'response2';

interface PostMessage<T extends PostMessageDataRequest | PostMessageDataResponse> {
  msg: PostMessageRequest | PostMessageResponse;
  data?: T;
}
