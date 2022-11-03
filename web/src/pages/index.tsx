type HomeProps = {
  count: number;
};

export default function Home({ count }: HomeProps) {
  return <h1 className="text-cyan-500">Number of pools: {count}</h1>;
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  console.log(data);

  return {
    props: {
      count: data.count,
    },
  };
};
