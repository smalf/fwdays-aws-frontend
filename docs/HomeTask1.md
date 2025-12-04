## Home Task: Lection 1

[<- Back to root](../README.md)

Test static web page hosting via CLI.
<p>[Final static page](http://fwdays-smal-021225.s3-website.eu-central-1.amazonaws.com/)

### 1. Preconditiongs:
Install CLI 
1. ```brew update ```
2. ```brew install awscli ```
3. ```aws --version ```

### 2. Add ENV Variables
```
BUCKET_NAME="fwdays-smal-021225"
HTML_FILE="index.html"
REGION="eu-central-1"
```

### 3. Configuration:
   ```aws configure```
```    
    AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
    AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
    Default region name [None]: eu-central-1 //Frankfurt
    Default output format [None]: json
```

### 4. Create Bucket
```
 aws s3api create-bucket --bucket $BUCKET_NAME --region $REGION --create-bucket-configuration LocationConstraint=$REGION
```

### 5. Upload index.html
```
 aws s3 cp "$HTML_FILE" s3://$BUCKET_NAME/$HTML_FILE
```

### 6. Allow Hosting
```
aws s3 website s3://$BUCKET_NAME/ --index-document $HTML_FILE
```

### 7. Public Access Configuration
**NOTE: For test purpose only!**
```
aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

### 8. Add S3 getObject Policy
```
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::'"$BUCKET_NAME"'/*"
        }
    ]
}'
```