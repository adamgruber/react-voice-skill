const noop = () => {};

export default {
  callbackWaitsForEmptyEventLoop: true,
  done: () => { console.log('context done'); },
  succeed: (res) => { console.log('context succeed', res); },
  fail: (err) => { console.log('\ncontext fail\n', err); },
  logGroupName: '/aws/lambda/helloWorld',
  logStreamName: '2018/03/12/[$LATEST]5b29d7b0ef7341e98d3869acb63ba3b9',
  functionName: 'helloWorld',
  memoryLimitInMB: '128',
  functionVersion: '$LATEST',
  getRemainingTimeInMillis: noop,
  invokeid: '96df20cd-2629-11e8-acc2-1974f9725afb',
  awsRequestId: '96df20cd-2629-11e8-acc2-1974f9725afb',
  invokedFunctionArn: 'arn:aws:lambda:us-east-1:816390444550:function:helloWorld',
};
