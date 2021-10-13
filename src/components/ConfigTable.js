import React, { Component, ReactDOM } from 'react'
import DataTable from 'react-data-table-component'
import FilePathFiltersTable from './FilePathFiltersTable.js'
import https from 'https'
//import data from '../data/test_config.json'

const options = {
    hostname: 'localhost:3000',
    port: 443,
    path: '/gitconnector/v1/repoconfig',
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}

const data = [
  {
    "repoConfigUid": "abcdefghij",
    "created": "2019-08-08T22:37:06.086Z",
    "modified": "2019-08-12T22:08:08.055Z",
    "configName": "Test Config 1",
    "repoUrl": "https://github.com/anotherrepo",
    "gitUser": "gitUserA",
    "gitPassword": "gitPasswordGoesHere",
    "forkOrganization": "PROD",
    "apiHost": "https://github.com",
    "sourceBranch": "dev",
    "targetBranch": "dev",
    "filePathFilters": [        
        {
            "fileType": "javaProperties",
            "includes": [
                "ContentRoot/shared/ua/eu/en/.*\\.properties"
            ],
            "excludes": [],
            "translationPath": "${originalFile.path.replaceAll('/en/', '/' + locale + '/')}${originalFile.name}",
            "localesMapping": [
                {
                    "smartling": "cs-CZ",
                    "application": "cs"
                },
                {
                    "smartling": "da-DK",
                    "application": "da"
                },
                {
                    "smartling": "de-DE",
                    "application": "de"
                },
                {
                    "smartling": "el-GR",
                    "application": "el"
                },
                {
                    "smartling": "es-ES",
                    "application": "es"
                },
                {
                    "smartling": "fi-FI",
                    "application": "fi"
                },
                {
                    "smartling": "fr-FR",
                    "application": "fr"
                },
                {
                    "smartling": "hu-HU",
                    "application": "hu"
                },
                {
                    "smartling": "it-IT",
                    "application": "it"
                },
                {
                    "smartling": "nl-NL",
                    "application": "nl"
                },
                {
                    "smartling": "no-NO",
                    "application": "no"
                },
                {
                    "smartling": "pl-PL",
                    "application": "pl"
                },
                {
                    "smartling": "pt-PT",
                    "application": "pt"
                },
                {
                    "smartling": "sk-SK",
                    "application": "sk"
                },
                {
                    "smartling": "sv-SE",
                    "application": "sv"
                }
            ],
            "directives": [
                "smartling.placeholder_format = NONE",
                "smartling.string_format = NONE",
                "smartling.string_format_paths = html: *"
            ]
        },
        {
            "fileType": "iOS",
            "includes": [
                "ContentRoot/shared/ua/row/en/.*\\.properties"
            ],
            "excludes": [],
            "translationPath": "${originalFile.path.replaceAll('/en/', '/' + locale + '/')}${originalFile.name}",
            "localesMapping": [
                {
                    "smartling": "ar-EG",
                    "application": "ar"
                },
                {
                    "smartling": "es-MX",
                    "application": "es",
                    "translationPath" : [
                      "${originalFile.path.replaceAll('/AD/en/', '/AD/' + locale + '/')}${originalFile.name}",
                      "${originalFile.path.replaceAll('/AD/en/', '/SM/' + locale + '/')}${originalFile.name}",
                    ]
                },
                {
                    "smartling": "he-IL",
                    "application": "he"
                },
                {
                    "smartling": "ko-KR",
                    "application": "ko"
                },
                {
                    "smartling": "th-TH",
                    "application": "th"
                },
                {
                    "smartling": "zh-CN",
                    "application": "zh_C2/zh"
                },
                {
                    "smartling": "zh-TW",
                    "application": "zh_TW/zh"
                }
            ],
            "directives": [
                "smartling.placeholder_format = NONE",
                "smartling.string_format = NONE",
                "smartling.string_format_paths = html: *"
            ]
        }        
    ],
    "authorizeJobs": false,
    "autoMergePullRequests": false,
    "conflictResolutionStrategy": "THEIRS",
    "languageLevelPullRequest": false,
    "smartlingProject": {
        "projectId": "12345678",
        "userIdentifier": "userIDhere",
        "tokenSecret": "tokenSecretHere"
    },
    "enabled": true
},
{
    "repoConfigUid": "klmnopqurst",
    "created": "2019-08-09T22:37:06.086Z",
    "modified": "2019-08-11T22:08:08.055Z",
    "configName": "Test Config 2",
    "repoUrl": "https://github.com/another repo",
    "gitUser": "gitUserB",
    "gitPassword": "gitPasswordGoesHere",
    "forkOrganization": "QA",
    "apiHost": "https://github.com",
    "sourceBranch": "master",
    "targetBranch": "master",
    "filePathFilters": [        
        {
            "fileType": "javaProperties",
            "includes": [
                "ContentRoot/shared/ua/eu/en/.*\\.properties"
            ],
            "excludes": [],
            "translationPath": "${originalFile.path.replaceAll('/en/', '/' + locale + '/')}${originalFile.name}",
            "localesMapping": [
                {
                    "smartling": "cs-CZ",
                    "application": "cs"
                },
                {
                    "smartling": "da-DK",
                    "application": "da"
                },
                {
                    "smartling": "de-DE",
                    "application": "de"
                },
                {
                    "smartling": "el-GR",
                    "application": "el"
                },
                {
                    "smartling": "es-ES",
                    "application": "es"
                },
                {
                    "smartling": "fi-FI",
                    "application": "fi"
                },
                {
                    "smartling": "fr-FR",
                    "application": "fr"
                },
                {
                    "smartling": "hu-HU",
                    "application": "hu"
                },
                {
                    "smartling": "it-IT",
                    "application": "it"
                },
                {
                    "smartling": "nl-NL",
                    "application": "nl"
                },
                {
                    "smartling": "no-NO",
                    "application": "no"
                },
                {
                    "smartling": "pl-PL",
                    "application": "pl"
                },
                {
                    "smartling": "pt-PT",
                    "application": "pt"
                },
                {
                    "smartling": "sk-SK",
                    "application": "sk"
                },
                {
                    "smartling": "sv-SE",
                    "application": "sv"
                }
            ],
            "directives": [
                "smartling.placeholder_format = NONE",
                "smartling.string_format = NONE",
                "smartling.string_format_paths = html: *"
            ]
        },
        {
            "fileType": "javaProperties",
            "includes": [
                "ContentRoot/shared/ua/row/en/.*\\.properties"
            ],
            "excludes": [],
            "translationPath": "${originalFile.path.replaceAll('/en/', '/' + locale + '/')}${originalFile.name}",
            "localesMapping": [
                {
                    "smartling": "ar-EG",
                    "application": "ar"
                },
                {
                    "smartling": "es-MX",
                    "application": "es"
                },
                {
                    "smartling": "he-IL",
                    "application": "he"
                },
                {
                    "smartling": "ko-KR",
                    "application": "ko"
                },
                {
                    "smartling": "th-TH",
                    "application": "th"
                },
                {
                    "smartling": "zh-CN",
                    "application": "zh_C2/zh"
                },
                {
                    "smartling": "zh-TW",
                    "application": "zh_TW/zh"
                }
            ],
            "directives": [
                "smartling.placeholder_format = NONE",
                "smartling.string_format = NONE",
                "smartling.string_format_paths = html: *"
            ]
        }        
    ],
    "authorizeJobs": true,
    "autoMergePullRequests": false,
    "conflictResolutionStrategy": "OURS",
    "languageLevelPullRequest": true,
    "smartlingProject": {
        "projectId": "abcdefgh",
        "userIdentifier": "userIDhere",
        "tokenSecret": "tokenSecretHere"
    },
    "enabled": true
}
]

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