<template>
  <div id="app">
    <el-container>
        <el-header>
          <el-row>
              <el-col :span="4"><div class="grid-content bg-purple title" >Petter</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light">&nbsp;&nbsp;</div></el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                      <ul class = "subList">
                        <li>个人中心</li>
                        <li>产品</li>
                        <li>项目 </li>
                        <li>|</li>
                        <li>测试</li>
                        <li>文档  </li>
                        <li>|</li>
                        <li>数据</li>
                        <li>团队</li>
                      </ul>
                </div>
              </el-col>

              <el-col :span="4">
                <div class="grid-content bg-purple-light">
                    <ul>
                      <li class = "login">登录&nbsp;&nbsp;注册</li>
                    </ul>
                </div>
              </el-col>
          </el-row>
      
        </el-header>
        <div class="subNavBar">
            <div class = "nav">
              
               <ul class = "subList">
                        <li class = "active">首页</li>
                    
                        <li>日程</li>
                        <li>|</li>
                        <li>任务 </li>
                       
                        <li>测试</li>
                     
                        <li>Bug </li>
                        <li>|</li>
                        <li>需求</li>
                    
                        <li>项目</li>
                        <li>积分</li>
                        <li>动态</li>
                       
               </ul>
            </div>
        </div>
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  methods:{
    login(){
      this.$router.push({name:"login",path:"login"})
    }
  }
}
</script>

<style lang="scss">

body{
  background-color: #f5f5f5;
}
li{
  list-style: none;
}
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
} 
 .el-header {
    background-color: rgb(26, 83, 158);
    color: #333;
    text-align: center;
    line-height: 60px;
     .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
          li{
            color:rgba(255, 255, 255, 0.829);
            font-size: 18px;
          }
        }

        .el-col {
          .subList{
            overflow: hidden;
            padding-left: 100px;
            .login{
              font-size:18px;
              color:#fff;
              border:1px solid #ccc;
              width: 80px;
              height: 40px;
              background-color: blue;
            }
            li{
              float:left;
              font-size:20px;
              color:rgb(250, 240, 240);
              padding:0 10px;
              list-style: none;
              margin-left:15px;
            }
          }
          .title{
              color:#fff;
              font-size:28px;
              font-weight: 600;     
          }
          border-radius: 4px;
            .bg-purple {
               
            }
            .bg-purple-light {
              
            }
        }
        
    }
 }
 .subNavBar{
  width:100%;
  margin-bottom: 10px;
  background-color: #fff;
   .nav{
     width: 1500px;
     height: 50px;
     line-height: 50px;
     margin:0 auto;
        .subList{
          width:600px;
          overflow: auto;
          margin:0 auto;
          
            li{
              float:left;
              font-size:16px;
              color:rgb(250, 240, 240);
              padding:0 5px;
              list-style: none;
              margin-left:15px;
              color:grey;
            }
        }
       
     }
   
  
 }

.el-main {

   
    width: 1400px;
    margin:0 auto;

  }
  
</style>
