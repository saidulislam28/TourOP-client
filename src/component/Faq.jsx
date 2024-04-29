
const Faq = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What types of tours do you offer?</summary>
				<div className="px-4 pb-4">
					<p>We offer a wide range of tours, including adventure tours, cultural tours, wildlife safaris, historical tours, and tailor-made trips to suit your preferences.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How do I book a tour?</summary>
				<div className="px-4 pb-4">
					<p>Booking a tour is easy! Simply browse our website, select your desired tour package, and follow the booking instructions. You can also contact our customer service team for assistance.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Do you provide travel insurance?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>While travel insurance is not included in our tour packages, we highly recommend purchasing it for your peace of mind. We can assist you in finding suitable travel insurance options.</p>
				</div>
			</details>
		</div>
	</div>
  
</section>
  );
};

export default Faq;