import React from "react";
import * as S from "../Style"

function Button  ({children, event}) {

    return ( <S.Btn onClick={event}>
    {children}
    </S.Btn> );

}

export default Button;
