import * as React from 'react'

class GroupList extends React.Component {
  render() {
    console.log("in groupList#render, props: %s", JSON.stringify(this.props))
    
    return(
      <ul>
        {(this.props as any).groups.map((group: String) =>
          <li>{group}</li>
        )}
      </ul>
    );
  }
}

export default GroupList
