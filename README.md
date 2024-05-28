# YouTube Video Downloader

This project provides a web-based interface for downloading YouTube videos in various resolutions using JavaScript for the frontend and an AWS Lambda function for the backend.

## Features

- Download YouTube videos by providing the video URL.
- Select the desired resolution (240p, 360p, 720p, 1080p).
- User-friendly interface with HTML, CSS, and JavaScript.

## Prerequisites

- AWS account with permissions to create Lambda functions and API Gateway.
- Node.js and npm installed locally (for Lambda function packaging).

## Project Structure

## Setup Instructions
### Frontend
1. Create files - index.html, styles.css, app.js.
2. Replace 'https://your-serverless-function-url' with the actual URL of your deployed serverless function.

### Backend
1. Create a 'lambda_function.js' as listed in the given files.
2. Package the 'lambda_function.js' and its dependencies into a zip file for deployment.
3. Deploy the zip file to AWS Lambda.
4. Create an API Gateway to trigger the Lambda function.
5. Note the URL of the API Gateway endpoint and update the index.html file accordingly.

## Usage
1. Open the index.html file in a web browser.
2. Enter the YouTube video URL.
3. Select the desired resolution.
4. Click "Download".
5. The video will be downloaded to your device.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Author
Ayan Abedin

## License 
This project is licensed under the MIT License.