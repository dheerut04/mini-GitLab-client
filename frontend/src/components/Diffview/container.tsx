import { connect } from "react-redux";
import { DiffViewWidget } from "./Diffview.widget";
import { diffViewActions } from "./actions.types";

const mapstateToProps = (state: any) => ({
    diff: state.diffview.diff,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        setDiff: (diff: any) => dispatch(diffViewActions.setDiff(diff)),
        resetDiff: () => dispatch(diffViewActions.resetDiff()),
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(DiffViewWidget);