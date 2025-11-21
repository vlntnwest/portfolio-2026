const page = async ({ params }) => {
  const { name } = await params;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
export default page;
