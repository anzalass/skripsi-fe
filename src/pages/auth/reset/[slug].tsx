export default function Reset() {
  return (
    <div className="w-full ">
      <div className="w-[46%] mt-[10%] mx-auto ">
        <div className="w-[full]  mx-auto flex items-center my-auto justify-center  border-[1px] border-black rounded-md py-10">
          <div className="w-[85%]">
            <h1 className="font-[500]">Reset Password</h1>
            <div className="mt-2">
              <input
                type="text"
                className="w-full h-[40px] border-[1px] rounded-md pl-3"
                placeholder="Password"
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                className="w-full h-[40px] border-[1px] rounded-md pl-3"
                placeholder="New Password"
              />
            </div>
            <div className="mt-4 w-[70%] mx-auto">
              <button className="w-[100%] bg-black text-white mx-auto h-[40px] border-[1px] rounded-md pl-3">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
