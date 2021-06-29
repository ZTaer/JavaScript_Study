import React, { useEffect, useCallback } from 'react';
import IndexPeople from '../../components/index-people/index-people.component';
import SwitchCustomTheme from '../../components/switch-custom-theme/switch-custom-theme.component';
import ReactOwnersVideo from '../../components/react-owners-video/react-owners-video.component';

// redux-saga
import { connect } from 'react-redux';
import { fetchPeopleReduxSagaStart } from '../../redux/people/people.action';

// react-router-dom
import { Link } from 'react-router-dom';

const Index = ({ fetchPeopleReduxSagaStart }) => {

    const test = useCallback(() => {
        fetchPeopleReduxSagaStart();
    }, [fetchPeopleReduxSagaStart]);

    useEffect(() => {
        test();
    }, [test]);

    return (
        <div className="index">
            <Link to={"/example"} >example</Link>
            <IndexPeople target={"L"} />
            <p style={{
                color: "fff",
                fontSize: "1rem",
                letterSpacing: "1px",
            }} >
                0. 挂载: constructor() --》 componentWillMount() --》 render() --》 componentDidMount()<br />
                1. 更新: shouldComponentUpdate() --》 render() --》 componentDidUpdate()<br />
                2. 卸载: componetWillUnmout()<br />
            </p>
            <SwitchCustomTheme />
            <h1>
                react-owners-video
            </h1>
            <ReactOwnersVideo url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" />
            <h1>
                react-owners-audio
            </h1>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchPeopleReduxSagaStart: () => dispatch(fetchPeopleReduxSagaStart()),
});

export default connect(null, mapDispatchToProps)(Index);