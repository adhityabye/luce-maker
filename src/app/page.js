import Link from "next/link";

function LandingPage() {
  return (
    <div className="relative min-h-full bg-white">
      <div className="relative h-screen">
        <video
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
          src="/components/vid_main.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <video
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
          src="/components/vid_main.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Button centered at the bottom */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ bottom: "0px" }}
        >
          <Link href="/home" passHref>
            <img
              src="/components/create.png"
              alt="Start Customizing"
              className="w-72 md:w-56 lg:w-64 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* PNG Assets with the X icon as a hyperlink */}
        <div className="absolute top-5 right-5 flex space-x-6">
          <a
            href="https://t.me/lucenfriends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/components/tele.png"
              alt="x Icon"
              className="w-16 h-16 object-contain transform transition-transform duration-300 hover:scale-90"
            />
          </a>
          <a
            href="https://x.com/LuceFriendsAi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/x.png"
              alt="x Icon"
              className="w-24 h-24 object-contain transform transition-transform duration-300 hover:scale-150"
            />
          </a>
          <a
            href="https://pump.fun/CnPgRuSbwsjYE5qUa5ov4uaDEBuZW7Vb6Bs2V9arpump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/components/buy.png"
              alt="x Icon"
              className="w-24 h-24 object-contain transform transition-transform duration-300 hover:scale-150"
            />
          </a>
          {/* <img
            src="/components/buy.png"
            alt="Buy Icon"
            className="w-24 h-24 object-contain transform transition-transform duration-300 hover:scale-90"
          /> */}
        </div>
      </div>
      <div className="h-full mx-auto">
        <div className="mx-auto flex-row justify-center pt-20">
          {/* <div className="w-full flex justify-center">
            <img
              src="/components/create.png"
              alt="Meet Luce Title"
              className="w-1/3 md:w-1/4 object-contain"
            />
          </div> */}
          <div className="w-full flex justify-center">
            <video
              className="w-3/4 md:w-3/4 object-contain"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/components/vid_desc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* <div className="w-full flex justify-center pt-7 pb-16">
            <img
              src="/assets/homepage/Molang-Meme.png"
              alt="Molang Meme Title"
              className="w-1/3 md:w-1/4 object-contain"
            />
          </div> */}
          {/* <div
            className="mx-auto flex-grow flex justify-center items-center relative w-3/4 h-[590px] p-2 rounded-lg"
            style={{
              backgroundImage: "url('/kolase.png')",
              backgroundSize: "contain", // Ensure the whole image is visible
              backgroundRepeat: "no-repeat", // Prevent repeating the image
              backgroundPosition: "center", // Center the image within the container
            }}
          ></div> */}

          <div className="relative mx-auto w-full flex-row justify-center pt-14">
            {/* <Link href="/home" passHref>
              <img
                src="/assets/homepage/Make-Your-Own.png"
                alt="Make Your Own Molang Title"
                className="w-1/3 md:w-1/4 object-contain mx-auto relative transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-2"
                style={{ cursor: "pointer" }}
              />
            </Link> */}
            <div className="mx-auto flex-grow flex justify-center items-center relative w-full h-full bg-[#E16EAA] p-10 transform -translate-y-"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
