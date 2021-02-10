export interface StoryServiceSeenInputItems {
  id: string;
  taken_at: number;
  user: {
    pk: number;
  };
}
export interface StoryServiceSeenInputReels {
  items: StoryServiceSeenInputItems[];
}
export declare type StoryServiceInput = StoryServiceSeenInputItems[] | StoryServiceSeenInputReels;
