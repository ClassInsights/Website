import Certificate from "../components/Certificate";
import Spacing from "../components/Spacing";
import BuyDemo from "../components/sections/BuyDemo";
import CertificateSection from "../components/sections/Certificate";
import Dashboard from "../components/sections/Dashboard";
import FAQ from "../components/sections/FAQ";
import Functionality from "../components/sections/Functionality";
import Hero from "../components/sections/Hero";
import KeyPoints from "../components/sections/KeyPoints";
import { CertificateProvider } from "../contexts/CertificateContext";

const Home = () => (
	<CertificateProvider>
		<Certificate />
		<Hero />
		<Spacing id="features" size="md" />
		<Functionality />
		<Spacing />
		<Dashboard />
		<Spacing />
		<CertificateSection />
		<Spacing />
		<KeyPoints />
		{/* <Spacing />
			<Testimonial /> */}
		<Spacing />
		<BuyDemo />
		<Spacing />
		<FAQ />
		<Spacing />
	</CertificateProvider>
);

export default Home;
