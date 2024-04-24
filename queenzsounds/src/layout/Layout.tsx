import { HeaderType, FooterType } from "../libs/constants";
import Header from "../components/header/Header";
import MinimalHeader from "../components/header/MinimalHeader";
import Footer from "../components/footer/Footer";

const SiteHeader = ({ header }: { header?: string }) => {
	if (header === HeaderType.Minimal) {
		return <MinimalHeader />;
	} else if (header === HeaderType.None) {
		return <></>;
	} else {
		return <Header />;
	}
};

const SiteFooter = ({ footer }: { footer?: string }) => {
	if (footer === FooterType.None) {
		return <></>;
	} else {
		return <Footer />;
	}
};

function Layout({
	header,
	footer,
	children,
}: {
	header?: string;
	footer?: string;
	children: JSX.Element;
}): JSX.Element {
	return (
		<div className="page-container">
			<SiteHeader header={header} />
			{children}
			<SiteFooter footer={footer} />
		</div>
	);
}

Layout.defaultProps = {
	header: HeaderType.Full,
	footer: FooterType.Full,
};

export default Layout;
