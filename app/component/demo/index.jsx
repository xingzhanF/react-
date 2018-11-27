import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        let x = 2;
        console.log(x)
    }

    render() {
        return (
            <div className="cont">
                <div className="index">
                    这里是demo
                </div>
            </div>
       );
   }
}

export default Index;