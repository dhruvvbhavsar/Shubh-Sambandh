import { json, type RequestHandler } from '@sveltejs/kit';
import AWS from 'aws-sdk';

async function generateUploadURL() {
	const s3 = new AWS.S3({
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		region: process.env.AWS_REGION,
		signatureVersion: 'v4'
	});
	const imageName = `${Date.now()}.jpg`;
	const params = {
		Bucket: process.env.S3_BUCKET_NAME,
		Key: imageName,
		Expires: 60 * 5
	};

	const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
	// uploadUrll = uploadUrl.split('?')[0];
	return uploadUrl;
}

export const POST: RequestHandler = async ({ request }) => {
	const uploadUrl = await generateUploadURL();
	const body = await request.formData();
	const file = body.get('file') as File;

	const response = await fetch(uploadUrl, {
		method: 'PUT',
		body: file,
	});

	return json({ url: response.url.split('?')[0] });
};
