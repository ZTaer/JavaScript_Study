import React, { Dispatch, useEffect } from "react";
import Hello from "../../components/hello/hello.component";

// react-router-dom
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { setCurrentUser, initCurrentUser } from "../../redux/user/user.actions";
import { TsUserActionTypes, PropsType } from "../../redux/user/user.model";
import { setOtherData, fetchDataUseReduxThunk, Test } from "../../redux/other/other.actions";
import { TsOtherActionTypes, SetOtherDataProps } from "../../redux/other/other.model";

/**
 * 第五步: mapDispatchToProps的使用( 等待笔记 )
 */
// 0. 组件Props类型配置
export interface Props {
    setCurrentUser: ( props: PropsType )=>void,   
    initCurrentUser: ()=>void,
    setOtherData: ( props: SetOtherDataProps )=>void
}

const HomePages = ({ setCurrentUser, initCurrentUser, setOtherData }: Props) => {

    useEffect(()=>{
        setCurrentUser({test:"test"});
        setOtherData("fuck!!!");
        return () => {
            initCurrentUser();
        };
    },[]);

    return(
        <div className="home-pages">
            <Link to="/other" >
                OtherPages
            </Link>
            <Hello name="test" />
        </div>
    );
};

// 1. mapDispatchToProps配置( 等待修正 )
    // a) Dispatch<TsUserActionTypes,XXXX>: 他们本身是指定action类型，用" | "隔开可以指定使用多个action类型
const mapDispatchToProps = ( dispatch: Dispatch<TsUserActionTypes | TsOtherActionTypes | Test > ) => ({
    setCurrentUser: ( props: PropsType ) => dispatch( setCurrentUser( props ) ),
    initCurrentUser: () => dispatch( initCurrentUser() ),
    setOtherData: ( props:SetOtherDataProps ) => dispatch( setOtherData(props) ),
    fetchDataUseReduxThunk: () => dispatch( fetchDataUseReduxThunk() ),
});

export default connect( null, mapDispatchToProps )(HomePages);