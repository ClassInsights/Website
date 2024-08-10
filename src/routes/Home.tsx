import Certificate from "../components/Certificate";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import Spacing from "../components/Spacing";
import CertificateSection from "../components/sections/Certificate";
import Functionality from "../components/sections/Functionality";
import Hero from "../components/sections/Hero";
import { CertificateProvider } from "../contexts/CertificateContext";

function Home() {
	return (
		<CertificateProvider>
			<Certificate />
			<Navbar />
			<PageWrapper>
				<Hero />
				<Spacing id="features" size="md" />
				<Functionality />
				<Spacing />
				<CertificateSection />
				<Spacing />
			</PageWrapper>
		</CertificateProvider>
	);
}

export default Home;
