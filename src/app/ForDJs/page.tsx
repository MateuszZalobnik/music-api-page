export default async function ForDJs() {
  // Initiate both requests in parallel
  const music = getMusic();
  const [data] = await Promise.all([music]);
  console.log(data);
  return (
    <>
      <h1>ForDJs</h1>
    </>
  );
}

async function getMusic() {
  const res = await fetch(`https://musicapi-fpzm.onrender.com/music`);
  return res.json();
}
