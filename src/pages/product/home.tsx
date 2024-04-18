import { HomeProductData } from "@/components/ProdukKami/produkkami";
import Cards2 from "@/components/cards/cards2";

export default function HomeProduct() {
  return (
    <div className="w-full">
      <div className="w-full relative">
        <img
          src="/family.jpg"
          className="w-full object-cover h-[300px] mt-[0px]"
          alt=""
        />
        <div className="absolute w-full top-0 ">
          <div className=" bg-[#0000004b] rounded-lg z-40 h-[300px]">
            <h1 className="font-[700] text-white justify-center pt-[110px] opacity-[100%] flex text-[40px] items-center text-center z-[999]">
              PAKET HOME
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 mx-auto font-[700] text-2xl">
        PAKET HOME
      </h1>
      <div className="w-11/12 mt-10 mb-10 mx-auto grid 1300:grid-cols-4 1000px:grid-cols-4 900px:grid-cols-3 800px:grid-cols-2 gap-3 600px:grid-cols-2 400px:grid-cols-1">
        {HomeProductData.map((p: any, i) => (
          <Cards2 data={p} />
        ))}
        {/* <Cards2 />
        <Cards2 />
        <Cards2 /> */}
      </div>
    </div>
  );
}
