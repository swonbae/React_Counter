import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

  //   constructor() {
  //     super();
  //     // console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    // console.log("props", this.props);

    return (
      //   <div>
      //     {this.state.tags.length === 0 && "Please create a new tag!"}
      //     {this.renderTags()}
      //   </div>
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
}

export default Counter;
