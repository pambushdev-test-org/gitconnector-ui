import React, { Component, ReactDOM } from 'react'
import DataTable from 'react-data-table-component'
import FilePathFiltersTable from './FilePathFiltersTable.js'
import https from 'https'
import data_import1 from '../data/test_config1.json'
import data_import2 from '../data/test_config2.json'

const options = {
    hostname: 'localhost:3000',
    port: 443,
    path: '/gitconnector/v1/repoconfig',
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}

const data = [data_import1, data_import2]

const columns = [
  {
    name: 'Config Name',
    selector: 'configName',
    sortable: true
  },
  {
    name: 'Config UID',
    selector: 'repoConfigUid',
    sortable: true
  },
  {
    name: 'Project ID',    
    selector: 'smartlingProject.projectId',
    sortable: true
  },
  {
    name: 'Repo URL',
    selector: 'repoUrl',
    sortable: true
  },
  {
    name: 'Git User',
    selector: 'gitUser',
    sortable: true
  },
  {
    name: 'Fork Org',
    selector: 'forkOrganization',
    sortable: true
  },
  {
    name: 'API Host',
    selector: 'apiHost',
    sortable: true
  },
  {
    name: 'Source Branch',
    selector: 'sourceBranch',
    sortable: true
  },
  {
    name: 'Target Branch',
    selector: 'targetBranch',
    sortable: true
  },
  {
    name: 'Authorize Jobs',
    cell: row => <p>{typeof row.authorizeJobs === 'boolean' ? row.authorizeJobs.toString() : row.authorizeJobs }</p>,
    sortable: true
  },
  {
    name: 'Auto Merge PR',
    cell: row => <p>{typeof row.autoMergePullRequests === 'boolean' ? row.autoMergePullRequests.toString() : row.autoMergePullRequests }</p>,    
    sortable: true
  },
  {
    name: 'Merge Conflict Resolution',
    selector: 'conflictResolutionStrategy',
    sortable: true
  },
  {
    name: 'Lang Level PR',    
    cell: row => <p>{typeof row.languageLevelPullRequest === 'boolean' ? row.languageLevelPullRequest.toString() : row.languageLevelPullRequest }</p>,
    sortable: true
  },
  {
    name: 'Enabled',
    cell: row => <p>{typeof row.enabled === 'boolean' ? row.enabled.toString() : row.enabled }</p>,
    sortable: true
  },
  {
    name: 'Created',
    selector: 'created',
    sortable: true
  },
  {
    name: 'Modified',
    selector: 'modified',
    sortable: true
  }  
];
 
// The row data is composed into your custom expandable component via the data prop
const ExpanableComponent = ({data}) => <div>{<FilePathFiltersTable filePathFilters={data.filePathFilters} />}</div>
console.log(data.filePathFilters)

class ConfigTable extends Component {
  constructor() {
    super()
    this.state = {data: data}    
  }

  render() {    
    return (      
        <DataTable
          columns={columns}
          data={this.state.data}
          highlightOnHover
          selectableRows
          expandableRows
          expandableRowsComponent={<ExpanableComponent />}
        />      
    )
  }
};

// Call API to get all the active gitconnector configs
/*const getConfigs = () => {
    let out, configs = ''
    const req = https.request(options, res => {
        console.log(`Called gitconnector API, statusCode: ${res.statusCode}`)

        res.on('data', chunk => {
            out += chunk
        })

        res.on('error', error => {
            console.error(error)
        })

        res.on('end', () => {
            let obj = JSON.parse(out)
            configs = obj
        })
    })
    req.end()
    return configs
}

data = getConfigs()*/

export default ConfigTable