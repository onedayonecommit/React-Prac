import React from "react";
import { Header, Body } from "../com";

const Shop = () => {
    return (
        <div>
            <Header title="상점 페이지" />
            <Body
                path="/detail/1/25/hihihihihihhhihihhhhih"
                name="1번 상품으로 이동"
            />
            <Body
                path="/detail/1/25/hihihihihihhiihihhhhih"
                name="2번 상품으로 이동"
            />
            <Body path="/detail/1/25/hihihihihihhihhhhhih" name="3번 상품으로 이동" />
            <Body path="/detail/1/25/hihihihihihhihihiih" name="4번 상품으로 이동" />
            <Body
                path="/detail/1/25/hihihihihihhihihihhhhih"
                name="5번 상품으로 이동"
            />
        </div>
    );
};

export default Shop;
