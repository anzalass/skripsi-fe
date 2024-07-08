import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Navbar() {
  const { data } = useSession();
  const [logout, setLogout] = useState(false);

  return (
    <div className="">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://mediagrasi.net/wp-content/uploads/2023/02/Asset-2@2x-2-e1676605352394.png"
              className="h-10"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex relative items-center space-x-6 rtl:space-x-reverse">
            {data ? (
              <div className="">
                <button
                  onClick={() => setLogout(!logout)}
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 xl:px-5 lg:px-5 md:px-5  py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  {data?.user?.image ? (
                    <Image
                      width={25}
                      height={25}
                      className="mr-2 w-[30px] rounded-full"
                      src={data.user?.image!}
                      alt=""
                    />
                  ) : null}
                  <span className="hidden md:block lg:block xl:block">
                    {data && data.user?.name}{" "}
                  </span>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {logout ? (
                  <div
                    id="dropdownHover"
                    className="z-10 absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li onClick={() => signOut()}>
                        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">
                          Sign out
                        </a>
                      </li>
                      {data?.user?.role === "admin" ? (
                        <Link href={"/admin/home"}>
                          <li>
                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">
                              Dashboard Admin
                            </a>
                          </li>
                        </Link>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="">
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  onClick={() => signIn("google")}
                  className="text-white bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm xl:px-5 lg:px-5 md:px-5 px-2 py-2.5 text-center dark:text-black inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-blue-300"
                  type="button"
                >
                  <span className="hidden xl:block md:block lg:block sm:hidden">
                    {" "}
                    Masuk Dengan Google{" "}
                  </span>{" "}
                  <FcGoogle className="lg:ml-2 xl:ml-2 " size={25} />
                  {data ? (
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  ) : null}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50  dark:bg-gray-700">
        <div className="w-full overflow-auto  px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="grid grid-flow-col auto-cols-max gap-8 font-medium mt-0 text-sm">
              <li>
                <Link href={"/"}>
                  <div
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Beranda
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div className="text-gray-900 dark:text-white hover:underline">
                    Layanan
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/tentangkami"}>
                  <div className="text-gray-900 dark:text-white hover:underline">
                    Tentang Kami
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div className="text-gray-900 dark:text-white hover:underline">
                    Produk Kami
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/hubungikami"}>
                  <div className="text-gray-900 mr-4 dark:text-white hover:underline">
                    Hubungi Kami
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
