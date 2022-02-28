import React, { useEffect, useCallback } from "react";
import IndexPeople from "../../components/index-people/index-people.component";
import SwitchCustomTheme from "../../components/switch-custom-theme/switch-custom-theme.component";
import DomJoin from "../../components/dom-join";

// redux-saga
import { connect } from "react-redux";
import { fetchPeopleReduxSagaStart } from "../../redux/people/people.action";

// react-router-dom
import { Link } from "react-router-dom";

const Index = ({ fetchPeopleReduxSagaStart }) => {
    const test = useCallback(() => {
        fetchPeopleReduxSagaStart();
    }, [fetchPeopleReduxSagaStart]);

    useEffect(() => {
        test();
    }, [test]);

    return (
        <div className="index">
            <Link to={"/example"}>example</Link>
            <IndexPeople target={"L"} />
            <p
                style={{
                    color: "fff",
                    fontSize: "1rem",
                    letterSpacing: "1px",
                }}
            >
                0. 挂载: constructor() --》 componentWillMount() --》 render()
                --》 componentDidMount()
                <br />
                1. 更新: shouldComponentUpdate() --》 render() --》
                componentDidUpdate()
                <br />
                2. 卸载: componetWillUnmout()
                <br />
            </p>
            <SwitchCustomTheme />
            <DomJoin />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchPeopleReduxSagaStart: () => dispatch(fetchPeopleReduxSagaStart()),
});

export default connect(null, mapDispatchToProps)(Index);
