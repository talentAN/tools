const paas_host = '10.129.18.80';
const project = 'default';
const trigger_event = '$PlanPopupDisplay';

const $sf_section_id = '$sf_section_id';
const $sf_plan_id = '$sf_plan_id';
const $sf_succeed = '$sf_succeed';
const $sf_plan_strategy_id = '$sf_plan_strategy_id';
const pop_section_id = 'App_popup';


// 鲲鹏地址
const upload_url = 'http://10.130.13.14/kunpeng/sf_simulator/plan_executor';
const headers =  {
  "accept": "application/json, text/plain, */*",
  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-TW;q=0.5",
  "authorization": "Bearer eKFFzsudbHGYVnFvkiTEnnEif6EMGbUVYth3rsVuathAiFOBwiIo9CanTcEts6tuUI1jqt7D9OhvzUyPbAA5vKYWJtXJpIkWFGl6CQem2hknQDEj2b6W5nEnDuRsTqyf",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "pragma": "no-cache"
};

// 测试用户
const az_1 = 'az_1';
const az_2 = 'az_2';
const az_3 = 'az_3';
const az_4 = 'az_4';

const strategy_id_case_1 = '50000076';
const strategy_id_case_2 = '50000077';
const strategy_id_case_3 = '50000078';
const strategy_id_case_4 = '50000079';
const strategy_id_case_5 = '50000080';
const strategy_id_case_6 = '50000081';
const strategy_id_case_7 = '50000082';
const strategy_id_case_8 = '50000083';
const strategy_id_case_9 = '50000084';
const strategy_id_case_10 = '50000085';
const strategy_id_case_11 = '50000086';



const data = [
  // case 1
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_1},
      {key: $sf_succeed, value:false},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_1},
      {key: $sf_succeed, value:true},
    ]
  },
  // case 2
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_2},
      {key: $sf_succeed, value:false},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_2},
      {key: $sf_succeed, value:true},
    ]
  },
  // case 3
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_3},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_3},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_3,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_3},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  {
    distinct_id: az_4,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_3},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  // case 4
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_4},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_4},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_3,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_4},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  {
    distinct_id: az_4,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_4},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  // case 5
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_5},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_5},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_3,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_5},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  {
    distinct_id: az_4,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_5},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  // case 6
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_6},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_6},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_3,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_6},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  {
    distinct_id: az_4,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_6},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  // case 7
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_7},
      {key: $sf_succeed, value:false},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_7},
      {key: $sf_succeed, value:true},
    ]
  },
  // case 8
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_8},
      {key: $sf_succeed, value:false},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_8},
      {key: $sf_succeed, value:true},
    ]
  },
  // case 9
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_9},
      {key: $sf_succeed, value:false},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_9},
      {key: $sf_succeed, value:true},
    ]
  },
  // case 10
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_10},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_10},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_3,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_10},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  {
    distinct_id: az_4,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_10},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
  // case 11
  {
    distinct_id: az_1,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_11},
      {key: $sf_succeed, value:false},
      {key: $sf_plan_strategy_id, value:'对照组'},
    ]
  },
  {
    distinct_id: az_2,
    attributes:[
      {key: $sf_section_id, value:pop_section_id},
      {key: $sf_plan_id, value: strategy_id_case_11},
      {key: $sf_succeed, value:true},
      {key: $sf_plan_strategy_id, value:'实验组'},
    ]
  },
];

const update_trigger_event = ({
  distinct_id,
  attributes
})=>fetch(upload_url,{
    method: 'POST',
    headers,
    body:JSON.stringify({
      "specifiedUser":0,
      "triggerType":0,
      "task_host":paas_host,
      "task_type":"plan_trigger_and_convert",
      "task_data":{
         "project":{
            "project_name_list":[project],
            "project_name_str":project
         },
         "task":{
            "is_import_user":false,
            "is_import_event":true
         },
         "user":{
            "user_of_random":{
               "is_true":false,
               "user_count":"",
               "value_of_did":"",
               "uid_flag":""
            },
            "user_of_select":{
               "is_true":false
            },
            "user_of_custom":{
               "is_true":true,
               "custom_distinct_id":[distinct_id],
               "custom_distinct_id_str":distinct_id
            },
            "custom_user_profiles":{
               
            }
         },
         "event":{
            "how_many_days_ago":-1,
            "custom_event_name_list":[
               [
                  "$AppStart"
               ],
               [
                  "$AppStart",
                  "addCart"
               ]
            ]
         },
         "plan":{
            "trigger_info":{
               "is_trigger":true,
               "event":trigger_event,
               "properties_list": attributes.map(item=>({attribute_key: item.key,attribute_value:item.value})),
               "attribute_key":"",
               "attribute_value":""
            },
            "convert_info":{
               "is_convert":false,
               "event":"",
               "properties_list":[
                  
               ],
               "attribute_key":"",
               "attribute_value":""
            }
         }
      }
   }),
   "referrer": "http://kunpeng.sensorsdata.cn/",
   "referrerPolicy": "strict-origin-when-cross-origin",
   "mode": "cors",
  "credentials": "include"
  }).then(response => response.json())

let i = 0;
const run = ()=>{
  const item = data[i];
  if(item){
    update_trigger_event(item).then(data=>{
      console.info(data)
        i++;
        run()
    })
  }
}

run()