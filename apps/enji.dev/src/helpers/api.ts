import { ReactionType } from '@prisma/client';
import axios from 'axios';

import { TApiResponse } from '@/types';

export const addReaction = async ({
  slug,
  type,
  count,
  section,
}: {
  slug: string;
  type: ReactionType;
  count: number;
  section: string;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/reactions/${slug}`, {
      type,
      count,
      section,
    });
  } catch (err) {
    //
  }
};
