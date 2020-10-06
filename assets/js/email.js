function setInitialState(){
    $("#customerName").val('');
    $("#customerEmail").val('');
    $("#customerPhone").val('');
    $("#customerContent").val('');
    $('#sendMail').text('Send')
    $( "#sendMail" ).prop( "disabled", false );
  }
  $("#sendMail").click(function(){
    
    let customerName = $("#customerName").val() ? $("#customerName").val() : '';
    let email = $("#customerEmail").val() ? $("#customerEmail").val() : '';
    let phone = $("#customerPhone").val() ? $("#customerPhone").val() : '';
    let content = $("#customerContent").val() ? $("#customerContent").val() : ''; 
;
    
    if(customerName!='' && email!='' && content!=''){
      $('#sendMail').text('Sending')
      $( "#sendMail" ).prop( "disabled", true )
      Email.send({
        Host : "smtp.gmail.com",
        Username : "honestmagicmask2020@gmail.com",
        Password : "-*/12345678",
        To : "honestmagicmask2020@gmail.com",
        From : email,
        Subject : `Hello Honest Magic Mask, I am ${customerName}`,
        Body : `${content}. Connect me via ${email} ${phone? ` or ${phone}` : ''}`
      }).then( message => 
        
        swal({
          title: "Message Sent!",
          text: `Hi, ${customerName}. Thank you for contacting us. We will reply you back soon.`,
          icon: "success",
          button: "Thanks",
        }),
        
        
        ).then(()=> {
          setInitialState()
        })
      }else{
        swal({
          title: "Complete your information!",
          icon: "warning",
          button: "Ok",
        })
      }
    })