import Image from "next/image";

export default function Jumbotron() {
  return (
    <div className="w-full  mt-8">
      <div className="w-[90%] relative mx-auto">
        <Image
          alt="Jumbotron"
          width={3000}
          className="w-full rounded-lg mx-auto h-[300px] object-cover -mt-[0]"
          height={0}
          src={
            "https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/complete-temp-2220x740.jpg"
          }
        />
        <div className="absolute w-full top-0 ">
          <div className=" bg-[#0000004b] rounded-lg z-40 h-[300px]">
            <h1 className="font-[500] text-white justify-center pt-[110px] opacity-[100%] flex text-[40px] items-center text-center z-[999]">
              Media Layanan Grasi Net
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
