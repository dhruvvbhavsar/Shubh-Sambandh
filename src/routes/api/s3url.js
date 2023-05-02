import AWS from 'aws-sdk';

// Create an instance of the S3 client with your AWS credentials
const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
    signatureVersion: 'v4'
});

const bucketName = 'shubhsambandh-pics'

export async function generateUploadURL() {
    const imageName = `${Date.now()}.jpg`
    
    // Set up the payload of what we are sending to the S3 api.
    // The `acl` property is set to 'public-read' for the image to be accessible to everyone.
    // The `key` property is the name of the file we are saving in the S3 bucket, and the `Body` property is the content of the file.
    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60,
        ContentType: 'image/jpeg',
        ACL: 'public-read'
    })
    
    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
    return  uploadUrl
}