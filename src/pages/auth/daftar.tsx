import Link from "next/link";

export default function Daftar() {
  return (
    <div className="w-full ">
      <div className="w-[46%] mt-[7%] mx-auto ">
        <Link href={"/"}>
          <button className="px-3 border-2 mb-3 rounded-xl py-2">
            Kembali
          </button>
        </Link>
        <div className="w-[full]  mx-auto flex items-center my-auto justify-center  border-[1px] border-black rounded-md py-10">
          <div className="w-[85%]">
            <h1 className="font-[500]">Daftar Ke Layanan Grasi Net</h1>
            <div className="mt-2">
              <input
                type="text"
                className="w-full h-[40px] border-[1px] rounded-md pl-3"
                placeholder="Email"
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                className="w-full h-[40px] border-[1px] rounded-md pl-3"
                placeholder="Nama"
              />
            </div>
            <div className="mt-8">
              <input
                type="password"
                className="w-full h-[40px] border-[1px] rounded-md pl-3"
                placeholder="Password"
              />
            </div>
            <div className="mt-4 w-[70%] mx-auto">
              <button className="w-[100%] bg-black text-white mx-auto h-[40px] border-[1px] rounded-md pl-3">
                Daftar
              </button>
            </div>
            <div className="w-[50%] mx-auto text-center mt-3">
              <h1>
                Sudah punya akun?{" "}
                <Link href={"/auth/masuk"}>
                  <span className="underline text-blue-500 hover:font-[500] cursor-pointer">
                    Masuk
                  </span>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
