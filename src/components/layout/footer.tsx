import HouseIcon from "../icons/house";
import TimeClockIcon from "../icons/timeClock";
import InstagramIcon from "../icons/instagram";
import PhoneIcon from "../icons/phone";
import TikTokIcon from "../icons/tikTok";
import FacebookIcon from "../icons/facebook";

export default function Footer() {
  return (
    <footer className="border-t border-t-main-black w-full md:w-4/5 m-auto flex flex-col md:flex-row p-4 place-items-center gap-8 md:gap-4 justify-evenly pb-10 ">
      <h2 className="text-3xl">Rizo's Cuisine</h2>

      {/* Location Details */}
      <div className="flex flex-col gap-8 md:gap-4 place-items-center md:place-items-start">
        <div className="flex gap-4 place-items-center">
          <PhoneIcon className="w-6 h-6 stroke-black fill-transparent" />
          <p aria-label="Phone Number">(727)-223-8600</p>
        </div>

        <div className="flex gap-4 place-items-center">
          <HouseIcon className="w-6 h-6 stroke-black fill-transparent" />
          <p aria-label="Address">2745 East Bay Drive, Largo, Florida 33771</p>
        </div>
      </div>

      <div className="flex gap-4 place-items-center">
        <TimeClockIcon className="w-6 h-6 stroke-black fill-transparent" />
        <ul className="flex flex-col gap-1 text-sm" aria-label="Hours">
          <li><b>Monday - Sunday</b><br /> 7 AM - 9 PM</li>
        </ul>
      </div>

      <div className="flex flex-col place-items-center gap-1">
        <h2>Social Media</h2>

        <ul className="flex place-items-center gap-2">
          <li className="group">
            <a href="https://www.instagram.com/rizoscuisine/">
              <InstagramIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
            </a>
          </li>
          <li className="group">
            <a href="https://tiktok.com/@rizos.cuisine?_t=ZT-8uqttGE72Xz&_r=1">
              <TikTokIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
            </a>
          </li>
          <li className="group">
            <a href="https://www.facebook.com/people/Rizos-Cuisine/61570439825645/#">
              <FacebookIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
