import React, { useEffect, useCallback } from "react";
import IndexPeople from "../../components/index-people/index-people.component";

// redux-saga
import { connect } from "react-redux";
import { fetchPeopleReduxSagaStart } from "../../redux/people/people.action";

import { Link } from "react-router-dom";

const Index = ({ fetchPeopleReduxSagaStart }) => {
  const test = useCallback(() => {
    fetchPeopleReduxSagaStart();
  }, [fetchPeopleReduxSagaStart]);

  useEffect(() => {
    // debugger; // 开启debug调试语法 --> 然后在浏览器中调试( 完成笔记 )
    console.log('debug :>> ');
    test();
  }, [test]);

  return (
    <div className="index">
      <Link to={"/example"}>example</Link> | <Link to={"/test"}>test</Link>
      <IndexPeople target={"L"} />
      <p
        style={{
          color: "fff",
          fontSize: "1rem",
          letterSpacing: "1px"
        }}
      >
        0. 挂载: constructor() --》 componentWillMount() --》 render() --》
        componentDidMount()
        <br />
        1. 更新: shouldComponentUpdate() --》 render() --》 componentDidUpdate()
        <br />
        2. 卸载: componetWillUnmout()
        <br />
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchPeopleReduxSagaStart: () => dispatch(fetchPeopleReduxSagaStart())
});

export default connect(null, mapDispatchToProps)(Index);
