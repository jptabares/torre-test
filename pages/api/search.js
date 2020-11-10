// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const { body, method } = req;

  if (method === "POST") {
    let mandatoryQuery =
      "offset=" +
      body.offset +
      "&size=" +
      body.size +
      "&aggregate=" +
      body.aggregate;
    let url =
      "https://search.torre.co/" +
      (body.type === "jobs" ? "opportunities" : "people") +
      "/_search/?" +
      mandatoryQuery;
    let data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((r) => {
      return r.json();
    });
    res.json(data);
  }
};
