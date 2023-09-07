export const getRooms = async () => {
  const url = `https://airbnb-server-task-soip.vercel.app/rooms`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const findCategory = async (type) => {
  const url = `https://airbnb-server-task-soip.vercel.app/rooms?category=${type}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
