import React from 'react';
import {connect} from 'react-redux';
import sirTrevorFactory from 'core/sirTrevorFactory';
import { newTextBlock } from 'actions/editorActions';

export const Editor = class Editor extends React.Component {

    componentDidMount(){
        sirTrevorFactory.getInstance(this.props.store, this.refs.wysiwyg);
        newTextBlock();
    }
    render() {
        return (
          <section className={this.props.className}>
            <h1 className="title">Sir Trevor Editor</h1>
            <form className="editor">
                <textarea ref="wysiwyg" className="js-st-instance"></textarea>
            </form>
          </section>
        )
    }
};

function mapStateToProps(state){
    return {
        actions: state.app.getIn(['editor', 'actions'])
    };
}

export const EditorContainer = connect(mapStateToProps)(Editor);
