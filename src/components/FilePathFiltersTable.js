import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import LocalesMappingTable from './LocalesMappingTable.js'

const columns = [
  {
    name: 'File Type',
    selector: 'fileType',
    maxWidth: '7%',
    sortable: true
  },
  {
    // TODO: Check styling of this
    name: 'Includes',    
    cell: (row) => <div>{row.includes.map((r, index) => <p key={index}>{r}</p>)}</div>,
    grow: 2,
    sortable: true
  },
  {
    // TODO: Check styling of this
    name: 'Excludes',
    cell: (row) => <div>{row.excludes.map((r, index) => <p  key={index}>{r}</p>)}</div>,
    grow: 2,
    sortable: true
  },
  {
    // TODO: Check styling of this
    name: 'Directives',
    cell: (row) => <div>{row.directives.map((r, index) => <p key={index}>{r}</p>)}</div>,
    grow: 2,
    sortable: true
  },
  {
    name: 'Translation Path',
    selector: 'translationPath',    
    sortable: true
  },
  {
    // TODO: Check styling of this
    name: 'Locales Mapping',
    cell: (row) => <LocalesMappingTable localesMapping={row.localesMapping} />,
    grow: 4,
    sortable: true
  }    
];

class FilePathFiltersTable extends Component {  
  render() {
    return (
      <DataTable
        title='File Path Filter Configs'
        columns={columns}
        data={this.props.filePathFilters}
      />
    )
  }
};

export default FilePathFiltersTable