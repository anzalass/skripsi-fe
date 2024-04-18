import { useRouter } from "next/router";
import React from "react";

type DetailProduk = {
  name: string;
  image: string;
  price: string;
  fitur: [];
};

export default function CardsProducts({ produk }: { produk: DetailProduk }) {
  const { push } = useRouter();

  const HandleClick = () => {
    push(produk?.nav);
  };
  return (
    <div
      // onClick={HandleClick}
      className=" p-2 mx-auto 1300px:w-[380px] 1000px:w-[310px] 900px:w-[380px] 800px:w-[350px] mb-4 bg-slate-50 shadow-2xl rounded-md"
    >
      <div className="w-full p-3 ">
        <img
          src={produk.image}
          className="rounded-md h-[200px] w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-3">
        <h1 className="text-xl font-[700]">{produk.name}</h1>
      </div>
      <ul role="list" className="space-y-5 my-3 p-4">
        {produk.fitur.map((p, i) => (
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-[15px]  font-[500] leading-tight text-gray-800 dark:text-gray-800 ms-3">
              {p}
            </span>
          </li>
        ))}
      </ul>
      <div className="p-3">
        <div className="flex items-baseline text-gray-900">
          <span className="text-3xl font-semibold">Rp.</span>
          <span className="1300px:text-4xl 1000px:text-3xl 900px:text-4xl 800px:text-4xl text-4xl font-extrabold tracking-tight">
            {produk.price}
          </span>
          <span className="ms-1  text-xl font-normal text-gray-500">
            /bulan
          </span>
        </div>
      </div>
      <div className="p-3 w-full">
        <button
          onClick={HandleClick}
          type="button"
          className="text-white w-[100%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center  text-center"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
}
