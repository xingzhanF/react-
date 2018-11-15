import React from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer"
import '../../public/css/index.pcss';

class Index extends React.Component {
    
    render() {
        return (
            <div className="cont">
                <Header />
                <div className="shop">
                    這裡是首頁
                </div>
                <Footer />
            </div>
       );
    }
}

export default Index;