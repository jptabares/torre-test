// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const {
    query: {id},
    method
  } = req

  if(method === 'GET') {
    let data = await fetch('https://torre.bio/api/bios/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }, 
    }).then( r => {
      return r.json();
    })
    res.json(data);
  }
}
