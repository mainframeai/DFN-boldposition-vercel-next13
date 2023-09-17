import client from '../lib/sanity';

async function getData() {
  const query = ` *[_type=='pet']`;
  const data = await client.fetch(query);
  return data;
}

export default async function Pets({}) {
  const data = await getData();
  return <div className="bg-white"></div>;
}
