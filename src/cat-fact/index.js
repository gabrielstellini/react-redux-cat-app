import React, {Component} from "react";
import {fetchCatFact, fetchCatImage} from "./actions";
import {connect} from "react-redux";
import {selectCatFact, selectCatImage} from './selectors';

class CatFact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;
    }

    render() {
        debugger;
        return (
        <div className={'cat-fact'}>
            <img alt={'cat'} src={''}/>
            <h1>FACT: {JSON.stringify(this.props)}</h1>
            <button onClick={() => this.props.onButtonClick()}>New Cat Fact</button>
        </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(fetchCatFact(dispatch));
            dispatch(fetchCatImage(dispatch));
        }
    }
};

const mapStateToProps = state => {
    return {
        fact: selectCatFact(state),
        image: selectCatImage(state)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatFact);