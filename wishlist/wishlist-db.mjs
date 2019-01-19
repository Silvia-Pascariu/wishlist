import AWS from 'aws-sdk';

AWS.config.update({
    region: "eu-west-2",
    accessKeyId: "AKIAIK2TNMPM7SI45M6Q",
    secretAccessKey: "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"
});

//
// const getTables = () => {
//     const dynamoDB = new AWS.DynamoDB();
//
//     dynamoDB.listTables().promise().then((res) => {
//         console.log('getTables:', res);
//     }).catch((err) => {
//         console.log('getTables error:', err);
//     });
// };
//
//
// getTables();

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables((err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});