export interface Plant {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  timeNotification: Date;
  hour?: string;
  frequency: {
    times: number;
    repeat_every: string;
  };
}
