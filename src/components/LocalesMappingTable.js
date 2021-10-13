import React, { Component } from 'react'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: 'Smartling',
    selector: 'smartling',
    compact: true,
    maxWidth: '20%',
    sortable: true
  },
  {    
    name: 'Application',
    selector: 'application',
    compact: true,
    maxWidth: '20%',
    sortable: true
  },
  {
    name: 'Translation Path',
    cell: (row) => <div>{row.translationPath !== undefined ? row.translationPath.map((r, index) => <p key={index}>{r}</p>) : <p>N/A</p>}</div>,    
    compact: true,
    sortable: true
  }
];

class LocalesMappingTable extends Component {  
  render() {
    return (
      <DataTable
        columns={columns}
        data={this.props.localesMapping}
      />
    )
  }
};

export default LocalesMappingTable