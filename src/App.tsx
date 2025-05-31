import "./App.css";
import ReviewSlider from "./components/home/reviewslider";
import FamilySlider from "./components/home/aboutSlider";

//TODO: ADD MENU BUTTONS FOR DINNER AND BREAKFAST

function App() {
	const reviewData: {
		user: string;
		rating: number;
		profilePicture: string;
		review: string;
	}[] = [
		{
			user: "Adexios W",
			rating: 5,
			profilePicture:
				"https://lh3.googleusercontent.com/a-/ALV-UjURnz6rfoRowMa4tTVT_ILCHKWwHv7PQ4OmtBl_qN0kB8Gb14iO2w=w60-h60-p-rp-mo-ba2-br100",
			review:
				"Amazing and varied food. Friendly and prompt service. Family atmosphere. All of us ordered something different and everyone commented about how good their food was. I recommend giving it a try.",
		},
		{
			user: "Amber Drake",
			rating: 5,
			profilePicture:
				"https://lh3.googleusercontent.com/a-/ALV-UjUU1edObpOoxzSlngcu9Ubee1__d5Pt3jeT0lYPJ3FLwgOfhvsx=w60-h60-p-rp-mo-ba3-br100",
			review: "Great food and service. Very fresh and clean restaurant. We will go back soon.",
		},
		{
			user: "El_ rique 12",
			rating: 5,
			profilePicture:
				"https://lh3.googleusercontent.com/a-/ALV-UjUYCEe9MMdSW-CeTJIRXS9igIjVrBcOKzFqP09Jx9vdhRCEXJuU=w60-h60-p-rp-mo-br100",
			review:
				"Portion size is great! Service is friendly and fast! Food is delicious! New favorite spot! Shrimp and grits are 10/10 add this",
		},
		{
			user: "Kelsey Moncibaiz",
			rating: 5,
			profilePicture:
				"https://lh3.googleusercontent.com/a-/ALV-UjXpjsiZakXVIJoxANzjPabmQi9rwWh-5HTUgmJPggzQl6sCPfl85A=w60-h60-p-rp-mo-br100",
			review:
				"Brooke provided exceptional service! - The food was absolutely delicious, especially the Queso Birria tacos. The Pesto Truffle fries were perfectly crispy. I highly recommend Rizos for anyone looking for great food and outstanding service! 😊",
		},
		{
			user: "mia dohring",
			rating: 5,
			profilePicture:
				"https://lh3.googleusercontent.com/a-/ALV-UjWILZfDr9Xwyv5GGg7lcphF5MgoDrJTokwvmYW3YwzK8MNw76SV=w60-h60-p-rp-mo-br100",
			review:
				"It was a pleasure visiting Rizo’s for lunch today! The food was amazing, Rizo is amazing, as well as his staff. The pesto truffle fries were 🔥 🔥If you find yourself in the central Largo area, do not hesitate to give this place a try! You won’t be disappointed!",
		},
		{
			user: "Levisey Evans",
			rating: 5,
			profilePicture:
				"https://lh3.googleusercontent.com/a-/ALV-UjU1yluan2-NsJV83qmK3tUw22E6yjEt_x_M6bZUfZHIt4Tgoqc=w60-h60-p-rp-mo-br100",
			review:
				"I cannot say enough great things about Rizo’s Cuisine! From the moment you walk in, you're greeted with warmth and hospitality that makes you feel right at home. The service is absolutely top-notch—attentive, friendly, and truly going above and beyond to ensure an amazing experience. I highly recommend stopping by and experiencing it for yourself!",
		},
	];

	const aboutUsSection = [
		{
			image: "public/parents.jpeg",
			description:
				"Rizos Cuisine is the passion project of Rizo and Irma, a couple whose heritage traces back to Guanajuato, Mexico. Rizo, who began working in restaurants at a young age, honed his craft as an executive chef at The Living Room on Main in downtown Dunedin before pursuing his lifelong dream of owning his own restaurant. At home, Rizo and Irma shared their love for cooking with their children—Edgar, Lissette, and Ryan—creating homemade meals that blended American and Mexican flavors. Now, with Irma by his side, Rizos Cuisine brings together those same traditions, offering a menu that reflects their family’s rich culinary heritage.",
		},
		{
			image: "public/edgar.jpeg",
			description:
				"Edgar, is the eldest son of the Rizo family and a proud graduate of the University of Florida. A dedicated Gators fan, he never misses a chance to cheer for their football, baseball, and basketball teams. Outside of work, he enjoys golfing with friends, going for runs, and working on cars—a true hands-on enthusiast. However, nothing matters more to him than family. Whether he’s helping out at Rizos Cuisine or working at his primary job in the medical field, Edgar is always balancing his passions with his deep-rooted commitment to those he loves.",
		},
		{
			image: "public/lissette.jpeg",
			description:
				"Lissette, the middle child of the Rizo family, known for her adventurous spirit and love for travel. No matter where she goes, family remains at the heart of everything she does. She cherishes the moments spent with loved ones and makes the most of every opportunity to connect with them. Passionate about her career, Lissette thrives as a dental assistant, finding fulfillment in helping others through her work in the dental field.",
		},
		{
			image: "public/ryan.jpeg",
			description:
				"Ryan, is the youngest of the Rizo family. While he may be quieter than his siblings, his warmth and loyalty shine through in the way he values family and friendships. In his free time, he enjoys playing video games, unwinding on family vacations, and spending time with his friends. Whether at home or out and about, Ryan finds joy in the simple moments that bring him closer to the people he cares about.",
		},
	];

	return (
		<main className="w-[95%] md:w-4/5 m-auto pb-10 pt-5 text-center">
			{/* Intro Video  */}
			<div className="relative flex w-full h-[25rem] items-center justify-center overflow-hidden">
				{/* Background Video */}
				<video
					className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src="/placeholdervideo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				{/* Foreground Content */}
				<p className="text-3xl text-white z-40 font-semibold p-2 border-2 border-[var(--color-brown)] ">
					Rizo's Cuisine
				</p>

				{/* Optional Overlay */}
				<div className="absolute inset-0 bg-black/65"></div>
			</div>

			{/* Menu Area */}
			<div className="relative flex flex-col gap-10 py-10">
				<h1 className="text-3xl p-2 border-2 border-[var(--color-brown)] w-max max-w-full mx-auto">View our menu</h1>

				<div className="relative flex justify-center">
					<img
						src="/Rizos Burger.jpeg"
						alt="4 loafs of bread, banana, strawberry, and blueberry dish"
						loading="lazy"
						className="shadow-lg w-full object-cover h-[28rem]"
					/>

					<div className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-40 text-lg font-semibold gap-10 place-items-center justify-center">
						<div className="flex flex-col [@media(min-width:800px)]:flex-row gap-2">
							<a
								href="https://drive.google.com/file/d/1ngTRpPiJ4_6dBsuBi9pWLpJShMxzxWAZ/view"
								className="py-2 px-4 border-2 border-[var(--color-brown)]"
							>
								Breakfast & Lunch Menu
							</a>
							<a
								href="https://drive.google.com/file/d/1TVcsEn1ZNdF_oo3wb3RZ9YTPz-W8cd6S/view"
								className="py-2 px-4 border-2 border-[var(--color-brown)]"
							>
								Dinner Menu
							</a>
						</div>

						{/* Order Options */}
						<div className="flex flex-col [@media(min-width:1000px)]:flex-row gap-2">
							<a
								href="https://www.clover.com/online-ordering/rizos-cuisine-largo"
								className="p-2 border-2 border-[var(--color-brown)] w-max mx-auto"
							>
								Order Online
							</a>
							<a
								href="https://page-service.doordash.com/store/rizo's-cuisine---2745-e-bay-dr-largo-33952438/63568351/?event_type=autocomplete&pickup=false"
								className="flex flex-col md:flex-row gap-2 w-max place-items-center mx-auto p-2 border-2 border-[var(--color-brown)]"
							>
								<p>Order With</p>
								<img src="/DoorDash_Logo.svg" alt="DoorDash Logo" className="w-max h-4" />
							</a>
							<a
								href="https://www.ubereats.com/store/rizos-cuisine/W6en2-K8Sz6J8HXss4grCQ?diningMode=DELIVERY&sc=SEARCH_SUGGESTION"
								className="flex flex-col md:flex-row gap-2 w-max place-items-center p-2 mx-auto border-2 border-[var(--color-brown)]"
							>
								<p>Order With</p>
								<img src="/Uber_Eats_2020_logo.svg" alt="Uber Eats Logo" className="w-max h-4" />
							</a>
						</div>
					</div>

					<div className="absolute inset-0 bg-black/65"></div>
				</div>
			</div>

			{/* About */}
			<div className="flex flex-col gap-10 py-10">
				<h1 className="text-3xl p-2 border-2 border-[var(--color-brown)] w-max max-w-full mx-auto">
					A little about us
				</h1>

				<FamilySlider section={aboutUsSection} />
			</div>

			{/* Google maps to restaurant */}
			<div className="flex flex-col gap-10 py-10">
				<h1 className="text-3xl p-2 border-2 border-[var(--color-brown)] w-max max-w-full mx-auto">Come visit us</h1>
				<p className="text-lg">Our current location is at 2745 East Bay Drive, Largo, Florida 33771.</p>
				<div className="flex flex-col gap-4">
					<h2 className="font-semibold text-[var(--color-brown)]">Current hours of operation:</h2>
					<p className="text-lg">Monday - Sunday: 7 AM - 9 PM</p>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4338.061386966646!2d-82.76118262388107!3d27.916221116246867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fbfc58447bf1%3A0x99c6e3d364c3c2d!2sRizo&#39;s%20Cuisine!5e1!3m2!1sen!2sus!4v1741723831904!5m2!1sen!2sus"
					allowFullScreen={true}
					title="Google Maps to Rizo's Cuisine"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full h-96 rounded-lg shadow-lg"
				/>
			</div>

			{/* Review Slider */}
			<div className="flex flex-col gap-10 py-10">
				<h1 className="text-3xl p-2 border-2 border-[var(--color-brown)] w-max max-w-full mx-auto">
					Heres what people have to say
				</h1>
				<p className="text-lg">
					Let us know how your experience was{" "}
					<a
						className="underline text-[var(--color-brown)] underline-offset-4"
						href="https://www.google.com/maps/place/Rizo's+Cuisine/@27.9162211,-82.7611826,996m/data=!3m1!1e3!4m8!3m7!1s0x88c2fbfc58447bf1:0x99c6e3d364c3c2d!8m2!3d27.9162164!4d-82.7586077!9m1!1b1!16s%2Fg%2F11l6l7qlsz?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
					>
						here.
					</a>
				</p>
				<ReviewSlider reviewData={reviewData} />
			</div>
		</main>
	);
}

export default App;
