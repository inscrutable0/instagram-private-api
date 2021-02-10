import { Feed } from '../core/feed';
import { DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem } from '../responses';
import { DirectThreadEntity } from '../entities';
export declare class DirectInboxFeed extends Feed<DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem> {
  private cursor;
  private seqId;
  set state(body: DirectInboxFeedResponse);
  request(messageLimit?: number, limit?: number, visual_message_return_type?: string): Promise<DirectInboxFeedResponse>;
  items(): Promise<DirectInboxFeedResponseThreadsItem[]>;
  records(): Promise<DirectThreadEntity[]>;
}