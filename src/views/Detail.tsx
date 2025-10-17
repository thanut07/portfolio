import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface IData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("fetch error", err);
      });
  }, [id])

  if (!data) return <p className="text-center">No product found</p>;

  return (
    <div className="w-full grid-cols-4 items-center">
      {loading ? (
        <div className="">
          <p>Loading..</p>
        </div>
      ) : (
        <div className="w-full flex flex-wrap items-stretch">
          <div className="p-2 w-full flex justify-center" >
            <div className="w-full bg-purple-300 rounded-lg flex flex-col md:flex-row items-center justify-evenly p-4">
              <img src={data.image} className="w-4/12 md:w-2/12 rounded-lg" />
              <div  className="w-full md:w-8/12 flex flex-col justify-center md:pl-8 text-center md:text-start mt-6 md:mt-0">
                <p className="font-bold">{data.price} $ </p>
                <p className="font-bold text-md">{data.title}</p>
                <p className="text-black/60 text-sm text-start">{data.description}</p>
                <button className="bg-purple-900 p-2 rounded-lg mt-4 text-white hover:bg-purple-900/80 active:scale-95 transition-all">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
