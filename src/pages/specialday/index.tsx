const SpecialDayPage = () => {
  return (
    <div className="bg-pink-100 bg-flower-pattern bg-cover min-h-screen">
      <h1 className="text-[60px] text-center font-bold font-cute py-5">
        Correct!!! This is Valentine Day
      </h1>
      <p className="text-center font-bold font-cute">
        I love you so much that i can say i love you more then you know.
      </p>
      <br />
      <p className="text-center font-bold font-cute">
        So, Happy valentine Day Babe maybe.{" "}
        <p className="underline">At 12:00 PM </p> waiting for me. I will give
        you something.
      </p>
      <div className="flex justify-center mt-10">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3B0czllOHhmZjM4dHJwNmF3dXdwN2xvaWxxZGltY3FidHA2amRzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif"
          alt="Valentine's Day GIF"
          className="w-[300px] h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-[-100px]">
        <img
          src="/image copy.png"
          alt="money"
          width={200} // ✅ Set a fixed width
          height={200}
        />
      </div>
    </div>
  );
};

export default SpecialDayPage;
