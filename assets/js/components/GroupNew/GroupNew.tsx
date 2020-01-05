import * as React from 'react'
import { IGroup } from '../../reducers/groupReducer';

export interface IGroupNewProps {
  group: IGroup
  handleChange: React.ChangeEventHandler
  handleSubmit: React.FormEventHandler
}

export class GroupNew extends React.Component<IGroupNewProps> {
  placeholders = {
    name: 'My Group'
  }

  render() {
    return(
      <>
        <h4>Add a new Group</h4>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="name" placeholder={this.placeholders.name} defaultValue={this.props.group.name} onChange={this.props.handleChange} />
          <input type="submit" value="Save" />
        </form>
      </>
    );
  }
};