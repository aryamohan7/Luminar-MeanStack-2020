class login{
    static getAccountDetails(){
        let data ={
           // arya:{username:"arya",password="aryas" ,accno=1001,balance=50000},
            ammu:{username:"ammu",password:"am", accno:1002,balance:5000000},

        }
        return data
    }
    static login(){
        let user=document.querySelector("#un").value
        let passwords=document.querySelector("#pass").value
       // alert(user+passwords)
        let data = login.getAccountDetails()
        if(user in data){
          //alert("user exist")
         let password=data[user]["password"] 
          if(passwords==password)
          {
              alert("password correct")
             // swal("success") 
            window.location.href="hello.html"


          }
          else
          {
            alert("password incorrect")
            //swal("not success");

          }
        }
        else
        {
          alert("user not exist")
          //  swal("user not exist");

        }
      
}
static deposit(){
  let unam=document.querySelector("#un").value
  let amt=Number(document.querySelector("#amount").value)

  let b_bal=document.querySelector("#bal")

  let data = login.getAccountDetails()

  if(unam in data)
  {
    //alert("hello")
    data[unam]["balance"]+=amt
    let bal_print=data[unam]["balance"]
    b_bal.textContent="Balance amount "+bal_print
  }
  else{
    alert("invalid")
  }
}

static withdraw()
{
  let withdraw_name=document.querySelector("#une").value
  let withdraw_amount=document.querySelector("#amnt").value

  let wd_bal=document.querySelector("#w_bal")

  let data = login.getAccountDetails()

  if(withdraw_name in data)
  {
    data[withdraw_name]["balance"]-=withdraw_amount
    let aval_bal=data[withdraw_name]["balance"]
    wd_bal.textContent="Now balance is "+aval_bal
  }
}

}