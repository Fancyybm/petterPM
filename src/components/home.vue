<template>
    <div class = "main">
        <section class = "right">
           <div class="dynamic">
                <div class="hd">
                    最新动态
                </div>
                <div>
                <div class="block">
                            <el-timeline>
                                <el-timeline-item timestamp="2018/4/12" placement="top">
                                    <el-card>
                                        <h4>更新 Github 模板</h4>
                                        <p>fancy 提交于 2019/3/01 20:46</p>
                                    </el-card>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2018/4/3" placement="top">
                                    <el-card>
                                        <h4>更新 Github 模板</h4>
                                        <p>fancy 提交于 2019/3/01 20:46</p>
                                    </el-card>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2018/4/2" placement="top">
                                    <el-card>
                                        <h4>更新 Github 模板</h4>
                                        <p>fancy 提交于 2019/3/03 10:46</p>
                                    </el-card>
                                </el-timeline-item>
                            </el-timeline>
                    </div>
                </div>
           </div>       
           <div class="todos">
               <div class="hd">todos</div>
               <div>
                   <input type="text" pla ceholder="添加">
                   <ul>
                       <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                       <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                       <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                       <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                       <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                       <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                        <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                        <li>
                           <span></span>
                           2019/3/12 12:00 
                        </li>
                   </ul>
               </div>
           </div>
           <div class="todos">
               <div class="hd">产品总览</div>
               <div>
                   <el-progress type="circle" :percentage="100" color = "#8e71c7"></el-progress>
                   <div class = "todoPro">
                       <p>正常 <span>&nbsp;&nbsp; 8 </span></p>
                       <p>结束 <span>&nbsp;&nbsp; 0 </span></p>
                   </div>
               </div>
           </div>
        </section>
        <section class = "left">
             <div class = "projectCount">
                 <div class="hd">
                     项目统计
                 </div>
                 <div class = "pj_list">
                     <div class="listName">
                         <ul>
                             <li>
                                <a class = "active">后台登录系统</a>
                            </li>
                             <li>
                                <a>表单验证</a>  
                            </li>
                             <li>
                                <a>asdfg</a>   
                            </li>
                             <li>
                                <a>零零duang</a>
                            </li>
                             <li>
                                <a>哈娃项目</a>
                            </li>
                             <li>
                                <a>末世</a>
                            </li>
                         </ul>
                      </div> 
                      <div class="chart">
                          <div class = "chartCircle">
                            
                             <el-progress type="circle" :percentage="25"></el-progress>
                          </div>
                          <div class="progress">

                              <el-progress :percentage="0"></el-progress>
                                <el-progress :percentage="25"></el-progress>
                          
                               
                             
                                <el-steps :space="200" :active="1" finish-status="success">
                                    <el-step title="创建"></el-step>
                                    <el-step title="进行中"></el-step>
                                     <el-step title="已完成"></el-step>
                                </el-steps>
                          </div>                        
                      </div>
                 </div>
            </div>
            <div class = "projectCount">
                 <div class="hd">
                     产品统计
                 </div>
                 <div class = "pj_list">
                     <div class="listName">
                         <ul>
                             <li>
                                <a class = "active">南画</a>
                            </li>
                             <li>
                                <a>淘乐乐商城</a>
                                
                            </li>
                             <li>
                                 <a>一盘提子</a>
                                 
                            </li>
                             <li>
                                 <a>TMCV/MVC/MVVM
                                 </a>
                            </li>
                             <li>
                                 <a>无尽火符来</a>
                            </li>
                             <li>
                                 <a>盘它</a>
                            </li>
                         </ul>
                      </div> 
                      <div class="chart">
                          <div class = "chartCircle">
                              <div class = "need">
                                <p>总需求</p>
                                <span>9</span>
                                <el-steps :active="2" align-center>
                                        <el-step title="未开始" description="5"></el-step>
                                        <el-step title="已进行" description="2"></el-step>
                                        <el-step title="研发中" description="1"></el-step>
                                          <el-step title="测试中" description="0"></el-step>
                                        <el-step title="已发布" description="1"></el-step>
                                </el-steps>

                          </div>                     
                          </div>
                          <div class="progress">
                              <el-progress :percentage="0"></el-progress>
                                <el-progress :percentage="25"></el-progress>
                                <el-progress :percentage="80"></el-progress>
                          </div>
                      </div>
                 </div>
            </div>
            <div class = "projectCount">
                    <div class="hd">
                        流程图
                    </div>
                    <div class = "process">
                        <ul>
                            <li>
                                <div class= "item" ></div>
                                <div class = "item" style = "backgroundColor = blue;"></div>
                                <div class= "item" ></div>
                                <div class= "item" ></div>
                            </li>
                        </ul>
                        
                    </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
         return {
            activeName: 'second',
       
            reverse: true,
            activities: [
            {
                content: 'fancy创建了项目',
                timestamp: '2019-03-01'
            }, 
            {
                content: 'fancy记录了任务',
                timestamp: '2019-03-01'
            },
            {
                content: 'andy变更了需求',
                timestamp: '2019-03-01'
            },
            {
                content: 'fancy指派了任务',
                timestamp: '2019-03-05'
            },
            {
                content: 'fancy变更了需求',
                timestamp: '2019-03-08'
            }
            ]
         }
    
    },
    methods:{
         handleClick(tab, event) {
            console.log(tab, event);
         }
    },
    created(){

    }
}
</script>
<style lang="scss" scoped> 
    .hd{
        padding: 12px 48px 12px 20px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        font-weight: 700;
    }
    .main{    
        .left{
             margin-right:350px; 
            .projectCount{
                position: relative;
                margin-bottom: 20px;
                background-color: #fff;
                border: 1px solid transparent;
                border-radius: 4px;
                -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05), 0 2px 6px 0 rgba(0,0,0,.045);
                box-shadow: 0 1px 1px rgba(0,0,0,.05), 0 2px 6px 0 rgba(0,0,0,.045);
                .process{
                      ul{
                          li{
                              list-style:none;
                              height: 40px;
                              .item{
                                  float:left;
                                  position: relative;
                                  width: 150px;
                                  height: 30px;
                                    background-color: #E8EBEF;
                                   color: #838A9D;
                                    font-weight: bold;
                                    padding-left: 0;
                                    margin-left:20px;
                                    &::after{
                                        content: ' ';
                                        display: block;
                                        width: 0;
                                        height: 0;
                                        border-style: solid;
                                        border-width: 15px 0 15px 10px;
                                        border-color: transparent transparent transparent #E8EBEF;
                                        position: absolute;
                                        right: -10px;
                                        top: 0;
                                    }
                                    &::before{
                                        content: ' ';
                                        display: block;
                                        width: 0;
                                        height: 0;
                                        border-style: solid;
                                        border-color: transparent transparent transparent #fff;
                                        position: absolute;
                                        left: 0px;
                                        top: 0;
                                    }
                              }
                          }
                      }   
                }
                .pj_list{
                    .listName{
                        width: 300px;
                        float:left;
                        border-right:1px solid #ccc;
                        ul{
                            padding:0 10px;
                            li{
                                list-style: none;
                                padding:0 10px;
                                margin-top:10px;
                                a{
                                    display: inline-block;
                                     
                                     padding-left: 20px;
                                     font-size:14px;
                                     color:#838A9D;;
                                }
                                .active{
                                    border-left:3px solid rgb(26, 83, 158);
                                }
                            }
                        }
                    }
                    .chart{
                        width:auto;
                        margin-left:300px;
                        height:200px;
                        // background-color: pink;
                        .chartCircle{
                            float:left;
                            width:40%;
                            text-align: center;
                            .need{
                                p{
                                    color:#838A9D;
                                }
                                span{
                                    font-size:50px;
                                }
                                .el-step{
                                    margin-top:10px;
                                    .el-step__icon.is-text{
                                        width: 15px;
                                        height: 15px;
                                    }
                                     .el-step-title{
                                    font-size:12px;
                                    line-height: 30px;
                                }
                                }
                               
                            }
                           
                        }
                         .progress{
                                float: right;
                                width: 400px;
                                .el-progress{
                                    margin-top:20px;
                                }
                            }
                        .el-steps{
                            margin-top:20px;
                        }
                        
                    }
                    
                }
            }
        }
        .right{
            float:right;
            width: 300px;    
            .dynamic{
                background-color: #fff;
                 padding: 0 10px;
                box-shadow: 0 1px 1px rgba(0,0,0,.05), 0 2px 6px 0 rgba(0,0,0,.045);
            }
            .todos{
                margin:20px 0;
                background-color: #fff;
                box-shadow: 0 1px 1px rgba(0,0,0,.05), 0 2px 6px 0 rgba(0,0,0,.045);
                padding:10px 20px;
                input{
                    outline: none;
                    border:1px solid #ccc;
                    width:100%;
                    height: 28px;
                    padding:5px 8px;

                }
                ul{
                    margin-top:10px;
                    li{
                        list-style:none;
                        padding:5px 8px;
                        font-size:14px;
                        color:#838A9D;
                        span{
                            display: inline-block;
                            width: 10px;
                            height: 10px;
                            background-color: #409EFF;
                            border-radius: 50%;
                            vertical-align: middle;
                        }
                    }
                }
                .todoPro{
                    margin-top:30px;
                    float:right;
                    width: 120px;
                    text-align: center;
                     color:rgb(128, 125, 125);
                     p{
                         line-height: 20px;
                         span{
                         font-weight: 700;
                         font-size: 20px;
                         color:#000;
                    }
                     }
                    
                }
           
            }
        }
    }
</style>