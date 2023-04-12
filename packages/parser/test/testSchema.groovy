Page
    PageTitle scope '#/name'
    Tabs
        Content path,name 'details'
            Grid itemsPerRow [4,1,7], spacing 2
                Grid itemsPerRow [7,5], spacingX 8 spacingY 0
                    Image | scope '#/image'
                    Grid | itemsPerRow 12, spacingY 4
                        TextWithLabel | scope '#/platform'
                    Grid | itemsPerRow 12
                        Divider | orientation 'horizontal'
                        Subsection | title 'Downloads'
                            Grid | itemsPerRow 12, spacingY 1
                                ExternalLink | scope '#/downloadLinks/softwareUpdates'
                                ExternalLink | scope '#/downloadLinks/installationGuide'
                                ExternalLink | scope '#/downloadLinks/productPhotos'
                Align | position 'center'
                    Divider | orientation 'vertical'
                List
                    Subsection | title 'System Settings'
                Grid
                    TextWithLabel | scope '#/macAddress'
                    TextWithLabel | scope '#/osVersion'
                    TextWithLabel | scope '#/serialNumber'
                    TextWithLabel | scope '#/ipAddress'
                    TextWithLabel | scope '#/firmwareVersion'
                    TextWithLabel | scope '#/cpuPercent'
                    TextWithLabel | scope '#/osVersion', 
                                    label 'CPU Usage'
                    TextWithLabel | scope '#/memUsedPercent', 
                                    label 'Memory Usage',
                                    elsed 'wewe'
        Content | name 'Configure', path 'config'
            SidebarNav
                Content | name 'Device Configuration', path 'device-config'
                    Subsection | title 'Device Configuration'
                        Grid | scope { value '#/pointer', enum '#/modes' } itemsPerRow 5 spacingX 4
                            CardToggle [name, isNullModem] | switchLabel 'Is Null Modem'
                Content | path 'inputs-outputs', name 'Inputs/Outputs'
                    Subsection | title 'Input Settings'
                        Grid [#/audioOutputs] | itemsPerRow 4
                            CardToggle
                                Grid | itemsPerRow 12
                                    TextField [connectionName] | label 'Connection'
                                    Slider [inputGain] | label 'Input Gain'
        Notes | name 'notes', path 'notes'
        ActivitiesScreen | name 'Activities' path 'activites'