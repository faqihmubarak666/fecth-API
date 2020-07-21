import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container } from "react-bootstrap/cjs";

const columns = [
  {
    dataField: "id",
    text: "Id",
  },
  {
    dataField: "name",
    text: "Name",
  },
  {
    dataField: "address",
    text: "Address",
  },
];

export default class TableComponent extends Component {
  render() {
    let { users } = this.props;
    return (
      <Container>
        <BootstrapTable keyField="id" data={users} columns={columns} />;
      </Container>
    );
  }
}
