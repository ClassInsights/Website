import { useCallback, useEffect, useRef } from "react";
import FunctionalitySVG from "../../assets/svg/functionality.svg?react";

const Functionality = () => {
	/** Reference to the parent div of the SVG */
	const elementRef = useRef(null);

	/** Start the whole animatino for the first time */
	const startAnimation = useCallback(() => {
		// Grap all the imporant HTML Elements
		const wire = document.getElementById("wire");
		if (!wire) return;
		const dots = Array.from(wire.children).reverse() as HTMLElement[];
		const shutdown = document.getElementById("shutdown")
			?.children[0] as HTMLElement;
		const screen = document.getElementById("screen") as HTMLElement;

		// Set the transition property for animated elements
		for (const dot of dots) {
			dot.style.transition = "fill .5s";
		}
		shutdown.style.transition = "fill .5s";
		screen.style.transition = "fill 1s";

		/** Reset the visual state back to the starting point */
		const resetAnimation = () => {
			shutdown.style.visibility = "hidden";
			screen.style.fill = "#edf1ff";
			shutdown.style.fill = "#edf1ff";
			shutdown.innerHTML = "Herunterfahren";
			setTimeout(animateDots, 1000);
		};

		/** Start the wire animation */
		const animateDots = () => {
			const colorDot = (dot: HTMLElement, index: number) =>
				setTimeout(() => {
					if (index === dots.length - 1) startTextAnimation();
					dot.style.fill = "#2C63F1";
				}, 100 * index);

			for (let i = 0; i < dots.length; i++) {
				const dot = dots[i];
				colorDot(dot, i);
			}
		};

		/** Start the shutdown text animation */
		const startTextAnimation = () => {
			shutdown.style.fill = "#060A12";

			// Append dots to the shutdown text
			shutdown.style.visibility = "visible";
			for (let i = 1; i < 4; i++) {
				setTimeout(() => {
					shutdown.innerHTML = `Herunterfahren${".".repeat(i)}`;
				}, 1000 * i);
			}

			// Switch the color of all dots back to default after 2000ms
			setTimeout(() => {
				for (const dot of dots) {
					dot.style.fill = "#dce3f8";
				}
			}, 2000);

			// Fade out the shutdown element and color the screen
			setTimeout(() => {
				shutdown.style.fill = "#b0bad8";
				screen.style.fill = "#b0bad8";
				setTimeout(resetAnimation, 2000);
			}, 4000);
		};

		// inital animation start
		animateDots();
	}, []);

	useEffect(() => {
		// Start animation when the section is visible on screen (depends on scroll position)
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(startAnimation, 1000);
					observer.disconnect();
				}
			},
			{
				threshold: 1.0,
			},
		);

		// start the observer
		if (elementRef.current) observer.observe(elementRef.current);

		return () => {
			// Clean up the Observer
			if (elementRef.current) observer.unobserve(elementRef.current);
			observer.disconnect();
		};
	}, [startAnimation]);

	return (
		<section className="flex flex-col items-center">
			<h2 className="w-full pb-5 md:pb-10 md:text-center">
				Automatisiertes Steuern der Computer
			</h2>
			{/* Functionality graphic*/}
			<div ref={elementRef} className="w-full lg:w-4/6 2xl:w-4/5">
				<FunctionalitySVG
					id="functionality"
					className="hidden w-full select-none md:inline"
				/>
			</div>
			{/* Explanation of graphic */}
			<p className="md:mt-10 md:w-1/2 md:text-center">
				Wenn in einem Raum{" "}
				<span className="text-primary">kein Unterricht mehr</span> stattfindet,
				werden die Computer, die nicht mehr in Verwendung sind,
				<span className="text-primary"> automatisch heruntergefahren</span>.
			</p>
		</section>
	);
};

export default Functionality;
