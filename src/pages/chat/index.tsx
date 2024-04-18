import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

import { SiWhatsapp } from "react-icons/si";

export default function Chat() {
  return (
    <div className="h-screen w-full">
      <div className="xl:w-[50%] lg:w-[55%] md:w-[90%] w-full  mx-auto bg-gray-900 h-[88vh] rounded-lg overflow-auto p-3 ">
        <div className="w-full h-[60px] bg-slate-700  ">
          <div className="flex w-full p-3 relative ">
            <Link href={"/"}>
              <div className="">
                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  {" "}
                  <IoArrowBackOutline size={20} />
                </button>
              </div>
            </Link>
            <h1 className=" pt-2  font-[600] mb-10 text-white">AI Assistant</h1>
            <SiWhatsapp
              className="absolute right-3 top-4"
              size={25}
              color="white"
            />
          </div>
          <div className="overflow-auto">
            <div className="w-[90%] mt-[10px]">
              <div className="bg-green-500  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi, cumque sapiente porro optio architecto in quibusdam
                sunt eum repellendus. Quia perspiciatis facilis aut fugit alias.
                Fugit totam voluptate doloremque, ut alias dignissimos delectus
                at ipsa earum enim corrupti maiores numquam cupiditate
                consectetur.\
              </div>
              <div className="bg-slate-200 mt-3 justify-end items-end ml-[60px]  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi,
              </div>
            </div>
            <div className="w-[90%] mt-[10px]">
              <div className="bg-green-500  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi, cumque sapiente porro optio architecto in quibusdam
                sunt eum repellendus. Quia perspiciatis facilis aut fugit alias.
                Fugit totam voluptate doloremque, ut alias dignissimos delectus
                at ipsa earum enim corrupti maiores numquam cupiditate
                consectetur.\
              </div>
              <div className="bg-slate-200 mt-3 justify-end items-end ml-[60px]  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi,
              </div>
            </div>
            <div className="w-[90%] mt-[10px]">
              <div className="bg-green-500  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi, cumque sapiente porro optio architecto in quibusdam
                sunt eum repellendus. Quia perspiciatis facilis aut fugit alias.
                Fugit totam voluptate doloremque, ut alias dignissimos delectus
                at ipsa earum enim corrupti maiores numquam cupiditate
                consectetur.\
              </div>
              <div className="bg-slate-200 mt-3 justify-end items-end ml-[60px]  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi,
              </div>
            </div>
            <div className="w-[90%] mt-[10px]">
              <div className="bg-green-500  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi, cumque sapiente porro optio architecto in quibusdam
                sunt eum repellendus. Quia perspiciatis facilis aut fugit alias.
                Fugit totam voluptate doloremque, ut alias dignissimos delectus
                at ipsa earum enim corrupti maiores numquam cupiditate
                consectetur.\
              </div>
              <div className="bg-slate-200 mt-3 justify-end items-end ml-[60px]  rounded-lg p-2 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                assumenda alias iste voluptatum doloribus veritatis nemo
                commodi,
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-900 flex xl:w-[50%] lg:w-[55%] md:w-[90%] w-full  mx-auto p-3">
        <input
          type="text"
          name=""
          className="h-[52px] rounded-l-xl pl-4 w-[90%]"
          placeholder="Ketik pesan..."
          id=""
        />
        <button className="h-[52px] bg-slate-100 rounded-r-xl w-[10%]">
          Kirim
        </button>
      </div>
    </div>
  );
}
