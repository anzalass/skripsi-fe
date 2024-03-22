import Link from "next/link";

export default function Lupasandi() {
  return (
    <div>
      <div className="w-full ">
        <div className="w-[46%] mt-[12%] mx-auto ">
          <Link href={"/"}>
            <button className="px-3 border-2 mb-3 rounded-xl py-2">
              Kembali
            </button>
          </Link>
          <div className="w-[full]  mx-auto flex items-center my-auto justify-center  border-[1px] border-black rounded-md py-10">
            <div className="w-[85%]">
              <h1 className="font-[500]">Lupa Sandi</h1>
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full h-[40px] border-[1px] rounded-md pl-3"
                  placeholder="Email"
                />
              </div>

              <div className="mt-4 w-[70%] mx-auto">
                <button className="w-[100%] bg-black text-white mx-auto h-[40px] border-[1px] rounded-md pl-3">
                  Kirim OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
