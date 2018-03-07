import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class HelloSign extends Component {
    render() {
        return (
            <div className="HelloSign">
                <script>
                    HelloSign.init("3e3f283135002d1993a92124341193df");
                    HelloSign.open({
                        url: "<?php echo $sign_url ?>",
                        allowCancel: true,
                        skipDomainVerification: true,
                        uxVersion: 2,
                        debug: true,
    //            userCulture: HelloSign.CULTURES.ES_MX,
                        messageListener: function (eventData) {
                            (console.log(">-*>-*>-*> Got message data: " + JSON.stringify(eventData)));
                            if (eventData.event == HelloSign.EVENT_SIGNED) {
                                if (eventData.signature_id == null) {
                                    alert("SIGNATURE_ID MISSING");
                                }
                                HelloSign.close();
                                alert("Give me a few seconds to get the documents");
                                console.log(eventData.signature_id + " here's some information that's useful...*&^^&**&^^&**&^^&**&^^&*");
                            //                  console.log("This is the signature_request_id...");
                            } else if (eventData.event == HelloSign.EVENT_CANCELED) {
                                HelloSign.close();
                                console.log(eventData);
                            } else if (eventData.event == HelloSign.EVENT_ERROR) {
                                HelloSign.close();
                                alert("There Was An Error And Stuff!");
                                console.log(eventData);
                            } else if (eventData.event == HelloSign.EVENT_SENT) {
                                if (eventData.signature_request_id == null) {
                                    alert("SIGNATURE_REQUEST_ID MISSING");
                                }
                                HelloSign.close();
                                console.log(eventData);
                                console.log("************");
                                console.log(eventData.signature_request_id);
                            } else if (eventData.event == HelloSign.EVENT_TEMPLATE_CREATED) {
                                HelloSign.close();
                                var template_id = eventData.template_id;
                                //                            window.alert("Template ID is " + template_id);
                                console.log(eventData);
                            } else if (eventData.event == HelloSign.EVENT_DECLINED) {
                                HelloSign.close();
                                //                            alert("Signature Request declined And Stuff!");
                                console.log(eventData);
                            }
                        }
                    });
                </script>
        )
    }
}

export default App;
