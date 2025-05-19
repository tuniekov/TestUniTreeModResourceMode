export default {
    testunitreemodresourcemode:{
        name:'testunitreemodresourcemode',
        gtsAPITables:{
            modResource2:{
                table:'modResource2',
                class:'modResource',
                autocomplete_field:'',
                version:3,
                type: 3,
                authenticated:true,
                groups:'',
                permitions:'',
                active:true,
                properties: {
                    actions:{
                        create:{
                            tables:{
                                modDocument2:{
                                    label:'Создать ресурс',
                                    parent_classes:['modDocument'],
                                    cls: 'p-button-rounded p-button-info',
                                    form:'UniTree',
                                    add_fields: {
                                        template: {
                                            label: 'Шаблон',
                                            type: 'autocomplete',
                                            table: 'modTemplate',
                                            defaultname:'CatalogTemplate',
                                        },
                                    }
                                },
                            }
                        },
                        delete:{},
                    },
                    nodeclick:{
                        classes:{
                            modDocument:{
                                tabs:{
                                    main:{
                                        type:'form',
                                        title:'Основное',
                                        table:'modDocument2',
                                    }
                                }
                            },
                        }
                    },
                    useUniTree : false,
                    extendedModResource : true,
                    rootIds: 0,
                    idField:'id',
                    parentIdField: 'parent',
                    // parents_idsField: 'parents_ids',
                    menuindexField: 'menuindex',
                    classField: 'class_key',
                    isLeafEmptyChild: 1,
                }
            },
        }
    },
    modx:{
        name:'modx',
        gtsAPITables:{
            modTemplate:{
                table:'modTemplate',
                autocomplete_field:'template',
                version:4,
                type: 1,
                authenticated:true,
                groups:'',
                permitions:'',
                active:true,
                properties: {
                    autocomplete:{
                        tpl:'{$templatename}',
                        where:{
                            "templatename:LIKE":"%query%",
                        },
                        limit:0,
                    },
                }
            },
            modDocument2:{
                table:'modDocument2',
                class:'modDocument',
                autocomplete_field:'',
                version:5,
                authenticated:true,
                groups:'',
                permitions:'',
                active:true,
                properties: {
                    actions:{
                        read:{},
                        update:{}
                    },
                    "fields": {
                        "id": {
                            "type": "view",
                        },
                        "pagetitle": {
                            "label":"Заголовок",
                            "type": "text",
                        },
                        "alias": {
                            "label":"Псевдоним",
                            "type": "text",
                        },
                        "published": {
                            "label":"Опубликовано",
                            "type": "boolean",
                        },
                        "content": {
                            "label":"Содержимое",
                            "type": "textarea",
                        }
                    },  
                }
            },
        }
    }
}
