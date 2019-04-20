<template>
  <div>
    <div class="container">
      <div class="login">
        <div class="title">
          <span>Petter</span>
        </div>
        <div class="content">
          <div class="content-left">
            <img src="../assets/slogo.png" alt="登录图片">
          </div>
          <div class="content-right">
            <form action="">
                <div class="user">
                  <span>用户名</span><el-input placeholder="请输入用户名" v-model="user" clearable> </el-input>
                </div>
                <div class="password">
                  <span>密&nbsp;&nbsp;&nbsp;&nbsp;码</span><el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </div>
                <div class="checkbox">
                  <el-checkbox v-model="checked">保持登录</el-checkbox>
                </div>
                <div class="loginBtn">
                  <el-button type="primary">登录</el-button>
                  <a href="javascript:;">忘记密码</a>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
       user: '',
       password: '',
       checked:false
      }
  }
}
</script>
<style lang="scss" scoped>
  html,body{
    width:100%;
    height:100%;
    background-color:rgb(26, 83, 158);
    background:url('../assets/bgimg.jpg') no-repeat;
  }
    .container{
      margin-top: 10%;
      .login{
        height: 300px;
        width: 700px;
        border: 1px solid #000;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 auto;
        .title{
          line-height: 70px;
          background-color: rgba(36, 103, 247, 0.884);
          span{
            font-weight: 600;
            font-size: 16px;
            margin: 70px;
          }
        }
        .content{
          height: 230px;
          display: grid;
          grid-template-columns: 4fr 6fr;
          .content-left{
            height: 100%;
            img{
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
          }
          .content-right{
            background-color: #fff;
            height: 100%;
            .user,.password{
              margin-left: 10px;
              margin-top: 15px;
              span{
                font-weight: 600;
                margin-right: 5px;
              }
              .el-input{
                width: 70%;
              }
            }
            .user{
              margin-top: 30px;
            }
            .checkbox,.loginBtn{
              margin-top: 15px;
              margin-left: 61px;
            }
            .loginBtn{
              button{
                padding: 10px 15px;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  
</style>
