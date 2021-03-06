const { handler } = require('./lambda/custom/index');

const event = {
  "version": "1.0",
  "session": {
    "new": true,
    "sessionId": "amzn1.echo-api.session.20481940-c1fd-40d0-9bc4-979af47cdd28",
    "application": {
      "applicationId": "amzn1.ask.skill.bc46566c-642c-4341-9d5e-d3dad2ca9556"
    },
    "user": {
      "userId": "amzn1.ask.account.AEY2UC2B4KW3P76IDLO3SDT7IYOQWUS5OKLLZZJHIUALHIM4YPRKZ5CLO2YHC4ILXQGNMWBOKDQHVQX7XQCKZPVNL4BY4UNSPUFXE3WALCH3CNJPY4X5RQFWKMNS6PNROKCISEOXUOMXDTUYGLM7Z5MWD3WGGSFVTSJVJFMO2YQXN6HAAZL72MDMLWPXTJWYXRRZY4TCTDZJSNI"
    }
  },
  "context": {
    "AudioPlayer": {
      "playerActivity": "IDLE"
    },
    "Display": {},
    "System": {
      "application": {
        "applicationId": "amzn1.ask.skill.bc46566c-642c-4341-9d5e-d3dad2ca9556"
      },
      "user": {
        "userId": "amzn1.ask.account.AEY2UC2B4KW3P76IDLO3SDT7IYOQWUS5OKLLZZJHIUALHIM4YPRKZ5CLO2YHC4ILXQGNMWBOKDQHVQX7XQCKZPVNL4BY4UNSPUFXE3WALCH3CNJPY4X5RQFWKMNS6PNROKCISEOXUOMXDTUYGLM7Z5MWD3WGGSFVTSJVJFMO2YQXN6HAAZL72MDMLWPXTJWYXRRZY4TCTDZJSNI"
      },
      "device": {
        "deviceId": "amzn1.ask.device.AHFPPRP2OJ3RZA5RSNHZI4V54PHGTZL62G5DWOU4ZG5ACCEWTYCNMECH5U57LKNA6PIPFSRUOLBN63J5YNWIBJ5GOLTI4S5TSR6S5RYDC4LQBWGN4T6NQKSDPRAVRWBX4K32QX3RFTJCFMJJWWDR5NTRO5FQ",
        "supportedInterfaces": {
          "AudioPlayer": {},
          "Display": {
            "templateVersion": "1.0",
            "markupVersion": "1.0"
          }
        }
      },
      "apiEndpoint": "https://api.amazonalexa.com",
      "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLmJjNDY1NjZjLTY0MmMtNDM0MS05ZDVlLWQzZGFkMmNhOTU1NiIsImV4cCI6MTUyMDg4NTkxMiwiaWF0IjoxNTIwODgyMzEyLCJuYmYiOjE1MjA4ODIzMTIsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUhGUFBSUDJPSjNSWkE1UlNOSFpJNFY1NFBIR1RaTDYyRzVEV09VNFpHNUFDQ0VXVFlDTk1FQ0g1VTU3TEtOQTZQSVBGU1JVT0xCTjYzSjVZTldJQko1R09MVEk0UzVUU1I2UzVSWURDNExRQldHTjRUNk5RS1NEUFJBVlJXQlg0SzMyUVgzUkZUSkNGTUpKV1dEUjVOVFJPNUZRIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUVZMlVDMkI0S1czUDc2SURMTzNTRFQ3SVlPUVdVUzVPS0xMWlpKSElVQUxISU00WVBSS1o1Q0xPMllIQzRJTFhRR05NV0JPS0RRSFZRWDdYUUNLWlBWTkw0Qlk0VU5TUFVGWEUzV0FMQ0gzQ05KUFk0WDVSUUZXS01OUzZQTlJPS0NJU0VPWFVPTVhEVFVZR0xNN1o1TVdEM1dHR1NGVlRTSlZKRk1PMllRWE42SEFBWkw3Mk1ETUxXUFhUSldZWFJSWlk0VENURFpKU05JIn19.VpafxMlAUrIi_oVUogXxp1ZI6atKe7V6zSM9Cs6WwIvnNkbLM6GYg5XgtrK3khCSxyLyabzHvL3xcc5ZNbzoV4tuVhjgC2CB_ozn1HWeid5wvStnMZYsFitKTB2vj6tYc8kfW_AUmo28znUoY2WdKi0gSp6j-OVjaWiV1jACAfRkkxidgUA6m0BhFUJbxijsyXX4k5YsHs7tBEBD972JNR30b1DCzpZYPV2CxGLC0QNuJhg-bJCLx4tU3qxdeIHdS0DNSfZGQSX5Zm5w7Sm6mI5My7UQYxFZ8nX34c4Ij32db0K8zrZVnx13KX0crNj2hrwV8HCfTbL5mB2lCvBBeQ"
    }
  },
  "request": {
    "type": "LaunchRequest",
    "requestId": "amzn1.echo-api.request.8de7a142-ad77-4998-b4c5-b7757c5d7fe9",
    "timestamp": "2018-03-12T19:18:32Z",
    "locale": "en-US"
  }
};

handler(event, {
  // callbackWaitsForEmptyEventLoop: [Getter/Setter],
  // done: [Function: done],
  // succeed: [Function: succeed],
  // fail: [Function: fail],
  logGroupName: '/aws/lambda/helloWorld',
  logStreamName: '2018/03/12/[$LATEST]5b29d7b0ef7341e98d3869acb63ba3b9',
  functionName: 'helloWorld',
  memoryLimitInMB: '128',
  functionVersion: '$LATEST',
  // getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],
  invokeid: '96df20cd-2629-11e8-acc2-1974f9725afb',
  awsRequestId: '96df20cd-2629-11e8-acc2-1974f9725afb',
  invokedFunctionArn: 'arn:aws:lambda:us-east-1:816390444550:function:helloWorld'
});
