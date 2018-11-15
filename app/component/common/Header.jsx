import React from 'react';

import '../../public/css/common.pcss';

const Header = () => 
        <div className="top">
            <div>這裡是頭部</div>
            <div className="nav">
                <a href="/index.html">首页</a>
                <a href="/shop.html">商城</a>
                <a href="/demo.html">demo</a>
            </div>
        </div>

export default Header;