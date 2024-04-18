import CardsProducts from "../cards/cardsproduct";
import { produkkami } from "./produkkami";

export default function ProdukKami() {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-2xl text-center font-[700] mb-5">PRODUK KAMI</h1>
      <div className="grid 1300px:grid-cols-3 1000px:grid-cols-3 800px:grid-cols-2 400px:grid-cols-1 gap-2 mx-auto w-[100%] ">
        {produkkami.map((p: any, i) => (
          <CardsProducts produk={p} />
        ))}
      </div>
    </div>
  );
}
