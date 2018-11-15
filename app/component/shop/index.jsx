import React from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer"
import '../../public/css/shop.pcss';

class Index extends React.Component {
    
    render() {
        return (
            <div className="cont">
                <Header />
                <div className="shop">
                    這裡是尚城
                </div>
                <Footer />
            </div>
       );
    }
}

export default Index;