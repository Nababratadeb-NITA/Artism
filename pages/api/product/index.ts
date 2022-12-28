import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../lib/client';

const allPostsQuery = () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
      postedBy->{
        _id,
        userName,
        image
      },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;

  return query;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const query = allPostsQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const doc = req.body;

    client.create(doc).then(() => {
      res.status(200).json('Product Listed');
    });
  }
}