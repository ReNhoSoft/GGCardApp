del NeutralTech.zip
7z a -tzip NeutralTech.zip "./"
aws lambda update-function-code --function-name neutral-tech-handler --zip-file fileb://NeutralTech.zip --region us-east-1 --output json >NUL
