import Header from '../components/Header';
import Footer from '../components/Footer';
import './weblayout.scss';
function WebLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default WebLayout;
