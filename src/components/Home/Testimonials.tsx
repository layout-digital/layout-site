import { useState } from "react";
import { testimonials } from "../../data";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Testimonials = () => {
	const [current, setCurrent] = useState(0);

	const handlePrev = () => {
		setCurrent((current) =>
			current === 0 ? testimonials.length - 1 : current - 1
		);
	};

	const handleNext = () => {
		setCurrent((current) =>
			current === testimonials.length - 1 ? 0 : current + 1
		);
	};

	return (
		<section className="py-24 border-b border-stroke-gray">
			<div className="container space-y-10 md:space-y-16 lg:space-y-20">
				<h2 className="headline">
					join learners that <br /> love layout
				</h2>
				<div className="space-y-8 md:space-y-10 lg:space-y-12 font-besely">
					<div className="flex pb-4 overflow-x-hidden gap-9 max-w-[400px] mx-auto md:max-w-[500px] lg:max-w-[860px] bg-red-300">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								style={{
									transform: `translateX(-${current * 100}%`,
								}}
								className="transition-transform ease-out duration-500 text-center rounded-[30px] border-[3px] border-stroke-gray px-6 py-8 flex flex-col justify-between gap-4 shadow-[0_8px_0] shadow-stroke-gray md:text-lg lg:text-xl font-medium lg:px-10 lg:py-14 min-w-full lg:min-w-[410px] md:gap-8"
							>
								<p>“{testimonial.description}"</p>
								<span>{testimonial.author}</span>
							</div>
						))}
					</div>
					<div className="flex justify-center gap-4">
						<button
							onClick={handlePrev}
							className="p-3 text-2xl border-2 border-gray-700 rounded-full bg-gray-gradient shadow-[0_4px_0] shadow-gray-800 transition-all duration-300 hover:bg-dark-gray-gradient hover:shadow-black hover:text-white hover:border-black lg:text-3xl lg:p-4"
						>
							<FaChevronLeft />
						</button>
						<button
							onClick={handleNext}
							className="p-3 text-2xl border-2 border-gray-700 rounded-full bg-gray-gradient shadow-[0_4px_0] shadow-gray-800 transition-all duration-300 hover:bg-dark-gray-gradient hover:shadow-black hover:text-white hover:border-black lg:text-3xl lg:p-4"
						>
							<FaChevronRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
