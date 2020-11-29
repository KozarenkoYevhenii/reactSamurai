import React from "react";

class Status extends React.Component {
  state = {
    editMode: false,
  };
  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input value="Status test" autoFocus={true} onBlur={this.toggleEditMode} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.toggleEditMode}>Status test</span>
          </div>
        )}
      </div>
    );
  }
}

export default Status;
