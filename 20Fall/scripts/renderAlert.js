const width=screen.width
function getAlert() {
    var token = 'Bearer e5159b89-86c1-3cca-8412-59de037c674b';
    setTimeout(getAlert,10000000)
    return $.ajax({
      url: 'https://gateway.api.cloud.wso2.com:443/t/mystop/tcat/v1/rest/PublicMessages/GetCurrentMessages',
      type: 'GET',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", token);
      },
      success: bindAlerts,
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert(errorThrown);
      }
      })
  }
  function bindAlerts(alerts,textStatus,XMLHttpRequest) {
      console.log('alerts :>> ', alerts);
      let message=''
      for (let index = 0; index < alerts.length; index++) {
        const element = alerts[index]['Message'];
        message+='▶︎ '
        message+=element
        message+='     '
      }
      $('#alert_txt').text(message).css("animation-duration", message.length*0.2+width*0.003+'s')

      // alerts.forEach(alert => {
      //       let message=alert['Message']
            
      // });
  }
  getAlert()
